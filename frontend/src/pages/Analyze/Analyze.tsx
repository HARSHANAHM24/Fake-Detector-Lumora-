import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";

import InvestigationResult from "../../components/investigation/InvestigationResult";

import "./Analyze.css";

function Analyze() {
  const [investigationText, setInvestigationText] = useState("");
  const [submittedClaim, setSubmittedClaim] = useState("");

  const [selectedImage, setSelectedImage] =
    useState<File | null>(null);

  const [selectedVideo, setSelectedVideo] =
    useState<File | null>(null);

  const [imagePreviewUrl, setImagePreviewUrl] =
    useState("");

  const [videoPreviewUrl, setVideoPreviewUrl] =
    useState("");

  const imageInputRef =
    useRef<HTMLInputElement>(null);

  const videoInputRef =
    useRef<HTMLInputElement>(null);


  /*
   * Create a temporary browser URL
   * whenever an image is selected.
   */
  useEffect(() => {
    if (!selectedImage) {
      setImagePreviewUrl("");

      return;
    }

    const previewUrl =
      URL.createObjectURL(selectedImage);

    setImagePreviewUrl(previewUrl);

    return () => {
      URL.revokeObjectURL(previewUrl);
    };
  }, [selectedImage]);


  /*
   * Create a temporary browser URL
   * whenever a video is selected.
   */
  useEffect(() => {
    if (!selectedVideo) {
      setVideoPreviewUrl("");

      return;
    }

    const previewUrl =
      URL.createObjectURL(selectedVideo);

    setVideoPreviewUrl(previewUrl);

    return () => {
      URL.revokeObjectURL(previewUrl);
    };
  }, [selectedVideo]);


  const handleInvestigate = () => {
    const trimmedText =
      investigationText.trim();

    if (trimmedText === "") {
      return;
    }

    setSubmittedClaim(trimmedText);
  };


  const handleTextChange = (
    event: ChangeEvent<HTMLTextAreaElement>
  ) => {
    setInvestigationText(event.target.value);

    setSubmittedClaim("");
  };


  const handleImageClick = () => {
    imageInputRef.current?.click();
  };


  const handleVideoClick = () => {
    videoInputRef.current?.click();
  };


  const handleImageChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedImage(file);

    setSelectedVideo(null);

    setSubmittedClaim("");
  };


  const handleVideoChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedVideo(file);

    setSelectedImage(null);

    setSubmittedClaim("");
  };


  return (
    <section className="analyze-page">

      <section className="analyze-hero">

        <p className="analyze-tag">
          🔎 Evidence Investigation
        </p>

        <h1>
          What would you like to investigate?
        </h1>

        <p className="analyze-description">
          Explore claims, images, videos, and URLs with
          evidence-based investigation.
        </p>

      </section>


      <section className="investigation-box">

        <div className="input-section">

          <label htmlFor="investigation-input">
            Enter a claim or information
          </label>

          <textarea
            id="investigation-input"
            value={investigationText}
            onChange={handleTextChange}
            placeholder="Paste a claim, statement, URL, or any information you want to investigate..."
          />

        </div>


        <button
          type="button"
          className="investigate-button"
          onClick={handleInvestigate}
        >
          🔍 Investigate
        </button>


        {submittedClaim && (
          <InvestigationResult
            claim={submittedClaim}
          />
        )}


        <div className="upload-divider">
          <span>OR</span>
        </div>


        <div className="upload-options">

          <button
            type="button"
            className="upload-card"
            onClick={handleImageClick}
          >
            <span className="upload-icon">
              📷
            </span>

            <span className="upload-title">
              Upload Image
            </span>

            <span className="upload-description">
              Investigate an image
            </span>
          </button>


          <button
            type="button"
            className="upload-card"
            onClick={handleVideoClick}
          >
            <span className="upload-icon">
              🎥
            </span>

            <span className="upload-title">
              Upload Video
            </span>

            <span className="upload-description">
              Investigate a video
            </span>
          </button>

        </div>


        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          className="hidden-file-input"
          onChange={handleImageChange}
        />


        <input
          ref={videoInputRef}
          type="file"
          accept="video/*"
          className="hidden-file-input"
          onChange={handleVideoChange}
        />


        {selectedImage && imagePreviewUrl && (
          <div className="selected-file">

            <div className="file-preview">

              <img
                src={imagePreviewUrl}
                alt={`Preview of ${selectedImage.name}`}
              />

            </div>

            <div className="selected-file-info">

              <strong>
                Image selected
              </strong>

              <p>
                {selectedImage.name}
              </p>

            </div>

          </div>
        )}


        {selectedVideo && videoPreviewUrl && (
          <div className="selected-file">

            <div className="file-preview">

              <video
                src={videoPreviewUrl}
                controls
              >
                Your browser does not support video
                playback.
              </video>

            </div>

            <div className="selected-file-info">

              <strong>
                Video selected
              </strong>

              <p>
                {selectedVideo.name}
              </p>

            </div>

          </div>
        )}

      </section>

    </section>
  );
}

export default Analyze;