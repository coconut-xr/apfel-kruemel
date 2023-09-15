import React from "react";

export function CodesandboxEmbed({
  defaultPath,
}: {
  defaultPath: string;
}) {
  return (
    <iframe
      src={`https://codesandbox.io/embed/apfel-kruemel-examples-ld9xk5?autoresize=1&fontsize=14&hidenavigation=1&initialpath=%23%2F${defaultPath}&theme=dark&view=preview`}
      style={{
        width: "100%",
        height: 500,
        outline: "1px solid #252525",
        border: 0,
        borderRadius: 8,
        marginBottom: 16,
        marginTop: 16,
        zIndex: 100,
      }}
      title="apfel-kruemel-examples"
      allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
      sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      loading="lazy"
    />
  );
}
