import { useState, useEffect, useRef } from "preact/hooks";

export default function Mic() {
  let [mics, setMics] = useState([]);
  let [micStatus, setMicStatus] = useState(false);
  let [micName, setMicName] = useState("");
  let [isMuted, setIsMuted] = useState(false);

  let audioContext = useRef(null);
  let audioSource = useRef(null);

  async function changeMic(event) {
    const selectedMicId = event.target.value;
    const selectedMic = mics.find((mic) => mic.deviceId === selectedMicId);

    const stream = await navigator.mediaDevices.getUserMedia({ audio: { deviceId: selectedMicId } });
    audioContext.current = new (window.AudioContext)();
    audioSource.current = audioContext.current.createMediaStreamSource(stream);
    audioSource.current.connect(audioContext.current.destination);

    setMicName(selectedMic.label);
  }

  async function checkMicPermission() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true })
    setMicStatus(true);

    audioContext.current = new (window.AudioContext)();
    audioSource.current = audioContext.current.createMediaStreamSource(stream);
    audioSource.current.connect(audioContext.current.destination);

    const devices = await navigator.mediaDevices.enumerateDevices();
    const mics = devices.filter((device) => device.kind === "audioinput");
    console.log(mics)

    // get the current mic
    const currentMic = mics.find((mic) => mic.deviceId === stream.getAudioTracks()[0].getSettings().deviceId);
    setMics(mics)
    setMicName(currentMic.label)
  }

  useEffect(() => {
    checkMicPermission();
  }, []);


  function toggleMute() {
    setIsMuted(!isMuted);
  }

  useEffect(() => {
    if (isMuted) {
      audioSource.current.disconnect(audioContext.current.destination);
    } else {
      audioSource.current.connect(audioContext.current.destination);
    }
  }, [isMuted])

  return (
    <>
      <h1>Can You Hear Me?</h1>
      
      {micStatus ? (
        <>
          <p>Microphone Detected! Using: {micName}</p>
          <select onChange={changeMic}>
            {mics.map((mic) => (
              <option value={mic.deviceId}>{mic.label}</option>
              ))}
          </select>
          <button onClick={toggleMute}>{isMuted ? "Unmute" : "Mute"}</button>
        </>
      ) : (
        <>
          <p>Microphone <b>Not</b> Detected</p>
          <p>Didn't get a prompt? </p>
          <button onClick={checkMicPermission}>Click Here</button>
        </>
      )}
      
    </>
  );
}