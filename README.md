# Canyouhearme
> Hear your microphone live

> [!TIP]
> 🚀 Built with [Astro](https://astro.build/) 

## Showcase
![Microphone Prompt](https://github.com/WillKirkmanM/canyouhearme/blob/master/Assets/Microphone%20Prompt.png?raw=true)
![Microphone Selection](https://github.com/WillKirkmanM/canyouhearme/blob/master/Assets/Microphone%20Selection.png?raw=true)

## Getting Started
```
$ yarn dev
```

The web application will be available at http://localhost:4321

## Building the Application
```
$ yarn build
```
![Building Application](https://github.com/WillKirkmanM/canyouhearme/blob/master/Assets/Building%20Application.png?raw=true)

## Notes
### Accessing the Microphone
If you are accessing the web application from the Network using `yarn dev --host` or an unsafe context (using `http://` instead of `https://`), the application will not be able to access your microphone:

> `NotAllowedError DOMException`: Thrown if one or more of the requested source devices cannot be used at this time. <mark>This will happen if the browsing context is insecure (that is, the page was loaded using HTTP rather than HTTPS)</mark>. It also happens if the user has specified that the current browsing instance is not permitted access to the device, the user has denied access for the current session, or the user has denied all access to user media devices globally. On browsers that support managing media permissions with Permissions Policy, this error is returned if Permissions Policy is not configured to allow access to the input source(s). 

Reference: "[MediaDevices: GetUserMedia() Method - Web APIs](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia)"

## How can I Contribute?
### I want to see Something!
Whether it be a feature or A bug? Submit an [issue](https://github.com/WillKirkmanM/CanYouHearMe/issues/new/choose). 
### Styling
I seriously love programming, but I am no picasso and lose my mind over CSS, feel free to style it. Preferably use [TailwindCSS](https://tailwindcss.com/) or [Mantine](https://mantine.dev/).
# Works Cited
“MediaDevices: GetUserMedia() Method - Web APIs | MDN.” Developer.mozilla.org, 1 Nov. 2023, developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia.