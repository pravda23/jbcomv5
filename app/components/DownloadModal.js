import { IoMdDownload } from "react-icons/io";

const DownloadModal = ({ musicTrack, onClose }) => {
  // Function to handle clicks outside the modal
  const handleOverlayClick = (e) => {
    // Check if the clicked target is the overlay
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the overlay is clicked
    }
  };

  const handleDownload = async () => {
    const response = await fetch(
      `https://johnbartmann.com/track/${musicTrack.url_slug}-sample.mp3`
    );
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${musicTrack.title}.mp3`; // Specify the desired filename
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div
      className="flex fixed inset-0 items-center justify-center bg-black bg-opacity-50"
      style={{ pointerEvents: "auto" }} // Ensures the overlay captures clicks
      onClick={handleOverlayClick} // Attach click handler to the overlay
    >
      <div className="w-2/3 h-1/2 bg-zinc-800 border-2 border-white p-4 rounded-lg shadow-lg flex flex-col overflow-hidden">
        <div className="text-lg mb-2">{musicTrack.title}</div>

        <div className="flex-grow overflow-auto">
          <a onClick={handleDownload}>
            <IoMdDownload style={{ fontSize: "2em" }} />
          </a>
          <p className="whitespace-pre-wrap break-words">
            Use the track however you like for free when you add this line of
            text to your description:
            <br />
            Music by John Bartmann https://youtube.com/johnbartmannmusic{" "}
            {`${musicTrack.lictype}`}
          </p>
        </div>

        <button onClick={onClose} className="absolute top-4 right-4 text-white">
          &times; {/* Close button */}
        </button>
      </div>
    </div>
  );
};

export default DownloadModal;
