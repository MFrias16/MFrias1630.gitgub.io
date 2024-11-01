// Calculadora de tamaño de imagen
function calculateImageSize() {
    const width = parseFloat(document.getElementById("image-width").value);
    const height = parseFloat(document.getElementById("image-height").value);
    const colorDepth = parseFloat(document.getElementById("color-depth").value);
  
    if (isNaN(width) || isNaN(height) || isNaN(colorDepth)) {
      alert("Por favor ingresa valores numéricos válidos.");
      return;
    }
  
    const sizeBits = width * height * colorDepth;
    const sizeMB = sizeBits / (8 * 1024 * 1024);
  
    document.getElementById("image-result").innerText = `Resultado: ${sizeMB.toFixed(2)} MB`;
  }
  
  // Calculadora de tamaño de archivo de audio
  function calculateAudioSize() {
    const duration = parseFloat(document.getElementById("audio-duration").value) * 60;
    const quality = parseFloat(document.getElementById("audio-quality").value);
    const frequency = parseFloat(document.getElementById("audio-frequency").value) * 1000;
    const channels = parseInt(document.getElementById("audio-channels").value);
  
    if (isNaN(duration) || isNaN(quality) || isNaN(frequency) || isNaN(channels)) {
      alert("Por favor ingresa valores numéricos válidos.");
      return;
    }
  
    const sizeBits = duration * quality * frequency * channels;
    const sizeMB = sizeBits / (8 * 1024 * 1024);
  
    document.getElementById("audio-result").innerText = `Resultado: ${sizeMB.toFixed(2)} MB`;
  }
  
  // Calculadora de tiempo máximo de video
  function calculateVideoDuration() {
    const resolution = document.getElementById("video-resolution").value.split("x");
    const width = parseInt(resolution[0]);
    const height = parseInt(resolution[1]);
    const colorDepth = parseFloat(document.getElementById("video-color-depth").value);
    const fps = parseFloat(document.getElementById("video-fps").value);
    const audioFrequency = parseFloat(document.getElementById("audio-frequency-video").value) * 1000;
    const memorySize = parseFloat(document.getElementById("memory-size").value) * 1024 * 1024 * 1024;
  
    if (isNaN(width) || isNaN(height) || isNaN(colorDepth) || isNaN(fps) || isNaN(audioFrequency) || isNaN(memorySize)) {
      alert("Por favor ingresa valores numéricos válidos.");
      return;
    }
  
    const videoSizePerSecond = (width * height * colorDepth * fps) + (audioFrequency * 16);
    const videoDuration = memorySize / videoSizePerSecond;
    const videoDurationMinutes = videoDuration / 60;
  
    document.getElementById("video-result").innerText = `Resultado: ${videoDurationMinutes.toFixed(2)} minutos`;
  }
  
  // Calculadora de cantidad de fotos en memoria
  function calculatePhotoCount() {
    const resolution = document.getElementById("photo-resolution").value.split("x");
    const width = parseInt(resolution[0]);
    const height = parseInt(resolution[1]);
    const colorDepth = parseFloat(document.getElementById("photo-color-depth").value);
    const memorySize = parseFloat(document.getElementById("memory-size-photos").value) * 1024 * 1024 * 1024;
  
    if (isNaN(width) || isNaN(height) || isNaN(colorDepth) || isNaN(memorySize)) {
      alert("Por favor ingresa valores numéricos válidos.");
      return;
    }
  
    const photoSizeBits = width * height * colorDepth;
    const photoSizeBytes = photoSizeBits / 8;
    const photoCount = memorySize / photoSizeBytes;
  
    document.getElementById("photo-result").innerText = `Resultado: ${Math.floor(photoCount)} fotos`;
  }
   