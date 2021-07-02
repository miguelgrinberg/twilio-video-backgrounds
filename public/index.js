const showLocalVideo = async () => {
  const videoTrack = await Twilio.Video.createLocalVideoTrack({
    width: 640,
    height: 480,
    frameRate: 24
  });
  document.getElementById('video').appendChild(videoTrack.attach());

  // uncomment one of the two following blocks, depending on what effect
  // you want to use

  // blur background
  const bg = new Twilio.VideoProcessors.GaussianBlurBackgroundProcessor({
    assetsPath: '/',
    maskBlurRadius: 10,
    blurFilterRadius: 5,
  });
  await bg.loadModel();
  videoTrack.addProcessor(bg);

  // replace background with an image
  /*
  let img = new Image();
  img.src = 'background.jpg';
  img.onload = async () => {
    const bg = new Twilio.VideoProcessors.VirtualBackgroundProcessor({
      assetsPath: '/',
      backgroundImage: img,
      maskBlurRadius: 5,
    });
    await bg.loadModel();

    videoTrack.addProcessor(bg);
  }
  */
}

showLocalVideo();
