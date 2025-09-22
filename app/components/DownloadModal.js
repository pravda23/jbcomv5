import { IoMdDownload } from "react-icons/io";
import { useState } from "react";

const DownloadModal = ({ musicTrack, onClose }) => {
  const [copied, setCopied] = useState(false);

  const handleOverlayClick = (e) => {
    e.stopPropagation();
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleDownload = async () => {
    const response = await fetch(
      `https://track.johnbartmann.com/${musicTrack.url_slug}-master.mp3`
    );
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${musicTrack.url_slug}-master.mp3`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  const copyText = `Music by John Bartmann https://youtube.com/johnbartmannmusic ${musicTrack.lictype}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(copyText);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (err) {
      setCopied(false);
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 cursor-default"
      onClick={handleOverlayClick}
      style={{ pointerEvents: "auto" }}
    >
      <div
        className="relative w-2/3 h-1/2 bg-zinc-800 border-2 border-white p-4 rounded-lg shadow-lg flex flex-col justify-center overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Content */}
        <div className="text-lg mb-2 border-b-2">{musicTrack.title}</div>

        <div className="flex flex-col items-center text-center">
          <div
            className="flex items-center justify-center p-4 cursor-pointer rounded-lg hover:bg-secondarylight hover:text-white transition-colors"
            onClick={handleDownload}
          >
            <IoMdDownload className="text-4xl" id="download-button" />
          </div>
          <div className=" text-white text-sm leading-relaxed whitespace-pre-wrap break-words">
            <p>
              Use the track however you like for free when you add this line of
              text to your description:
            </p>
            <div className="flex items-center gap-2 mt-2">
              <span
                id="download-text"
                className="px-2 py-1 border border-gray-400 rounded bg-zinc-900 text-gray-200 select-all"
                style={{ fontFamily: "monospace", fontSize: "0.95em" }}
              >
                {copyText}
              </span>
              <button
                onClick={handleCopy}
                className={`ml-2 px-2 py-1 bg-gray-600 text-white rounded border border-gray-400 hover:bg-gray-700 transition-colors text-xs`}
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
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
