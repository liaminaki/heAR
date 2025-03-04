import { Lock, Unlock, Play, Pause, RefreshCw} from "lucide-react";

interface ControlsProps {
  isLocked: boolean;
  isPlaying: boolean;
  playbackSpeed: number;
  toggleLock: () => void;
  togglePlay: () => void;
  changePlaybackSpeed: () => void;
  restart: () => void; 
}

const speedLabels: { [key: number]: string } = {
  1.0: "Normal",
  0.5: "Slow",
  0.25: "Very Slow",
};

const Controls: React.FC<ControlsProps> = ({
  isLocked,
  isPlaying,
  playbackSpeed,
  toggleLock,
  togglePlay,
  changePlaybackSpeed,
  restart,
}) => {

  return (
    <div className="controls-container">
      <button className="control-btn" onClick={toggleLock}>
        {isLocked ? <Lock size={20} /> : <Unlock size={20} />}
      </button>

      <button className="control-btn play-btn" onClick={togglePlay}>
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>

      <button className="control-btn" onClick={changePlaybackSpeed}>
        <span>{speedLabels[playbackSpeed]}</span>
      </button>

      <button className="control-btn" onClick={restart}>
        <RefreshCw size={20} />
      </button>
    </div>
  );
};

export default Controls;