import { IoMdDownload } from "react-icons/io";

const DownloadModal = ({ musicTrack, onClose }) => {
  // Function to handle clicks on the overlay
  const handleOverlayClick = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose(); // Close the modal if the overlay itself is clicked
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
    a.download = `${musicTrack.title}.mp3`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-default"
      onClick={handleOverlayClick} // Handle clicks on the overlay
      style={{ pointerEvents: "auto" }} // Ensure overlay captures all pointer events
    >
      <div
        className="relative w-2/3 h-1/2 bg-zinc-800 border-2 border-white p-4 rounded-lg shadow-lg flex flex-col justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside the modal from propagating
      >
        {/* Modal Content */}
        <div className="text-lg mb-2 border-b-2">{musicTrack.title}</div>

        <div className="flex flex-col items-center text-center">
          <div
            className="flex items-center justify-center p-4 cursor-pointer rounded-lg hover:bg-secondarylight hover:text-white transition-colors"
            onClick={handleDownload}
          >
            <IoMdDownload className="text-4xl" />
          </div>
          <p className="mt-4 text-white text-sm leading-relaxed whitespace-pre-wrap break-words">
            Use the track however you like for free when you add this line of
            text to your description:
            <br />
            <br />
            Music by John Bartmann https://youtube.com/johnbartmannmusic{" "}
            {musicTrack.lictype}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-2xl font-bold"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default DownloadModal;
