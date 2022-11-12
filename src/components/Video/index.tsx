interface VideoProps {
  src: string;
}

export const Video = ({ src }: VideoProps) => {
  return (
    <video controls>
      <source src={src} type='video/mp4' />
      Your browser does not support the video tag.
    </video>
  );
};
