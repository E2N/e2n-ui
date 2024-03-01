import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SetStateAction, useState } from "react";
import { colorPalette } from "../../theme";
import { cx, css } from "@emotion/css";
import { faCheck, faCopy } from "@fortawesome/free-solid-svg-icons";

type CustomProps = {
  className?: string;
  value: string;
};

export type CopyToClipboardProps = CustomProps;

function getStyles() {
  return {
    wrapper: css({
      display: "flex",
      alignItems: "center",
      gap: "0 0.35rem",
    }),
    icon: css({
      color: colorPalette.grey500,
      ":hover": {
        color: colorPalette.textLightPrimary,
        cursor: "pointer",
      },
    }),
  };
}

export function CopyToClipboard({
  className,
  value,
  ...otherProps
}: CopyToClipboardProps) {
  const [isCopyied, setIsCopyied] = useState(false);
  const styles = getStyles();
  const copyToClipboard = (
    value: string,
    setIsCopyied: React.Dispatch<SetStateAction<boolean>>
  ) => {
    navigator.clipboard.writeText(value);
    setIsCopyied(true);
    setTimeout(() => {
      setIsCopyied(false);
    }, 3000);
  };
  return (
    <div
      className={cx("wrapper-style", styles.wrapper)}
      data-testid="copyToClipboardContainer"
    >
      <div>{value}</div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FontAwesomeIcon
          className={cx("icon-style", styles.icon, className)}
          icon={!isCopyied ? faCopy : faCheck}
          onClick={() => copyToClipboard(value, setIsCopyied)}
          {...otherProps}
        />
      </div>
    </div>
  );
}
