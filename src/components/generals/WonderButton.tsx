import "./wonderButton.css";

interface WonderButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Button neon effect
   */
  neon: boolean;
  /**
   * Image object with url and alt
   */
  image?: {
    /**
     * Image url
     */
    url: string;
    /**
     * Image alt
     */
    alt: string;
  };
  /**
   * How large should the image be?
   */
  imageSize?: "small" | "medium" | "large";
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const WonderButton = ({
  neon = false,
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  image,
  imageSize,
  ...props
}: WonderButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  const brightness = neon ? "storybook-button--neon" : "";
  const imageWidth = imageSize ? `img--${imageSize}` : ''
  return (
    <button
      type="button"
      className={[
        "storybook-button",
        `storybook-button--${size}`,
        mode,
        brightness,
      ].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      <div className="button__itern-container">
        {image && (
          <img className={imageWidth} src={image.url} alt={image.alt} />
        )}
        {label}
      </div>
    </button>
  );
};
