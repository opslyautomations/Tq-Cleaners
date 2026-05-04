"use client";
import { useEffect, useRef, useState } from "react";

interface GHLFormProps {
  /** Initial height before GHL's embed script reports the exact value */
  minHeight?: string;
}

export default function GHLForm({ minHeight = "1600px" }: GHLFormProps) {
  const [height, setHeight] = useState(minHeight);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      try {
        const raw = event.data;
        const data = typeof raw === "string" ? JSON.parse(raw) : raw;

        let reported: number | undefined;

        // GHL sends {type:"iframeHeight", height:N} or {type:"iframeResize", height:N}
        if (
          (data?.type === "iframeHeight" || data?.type === "iframeResize") &&
          typeof data.height === "number" &&
          data.height > 100
        ) {
          reported = data.height;
        } else if (typeof data?.height === "number" && data.height > 100) {
          reported = data.height;
        }

        if (reported) {
          // 60px buffer so the bottom consent text + policy links are never clipped
          setHeight(`${reported + 60}px`);
        }
      } catch {
        // ignore non-JSON messages from other origins
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div style={{ height }} className="w-full">
      <iframe
        ref={iframeRef}
        src="https://api.opslyautomations.com/widget/form/eIUGbCAZpWWHv8h2d4XJ"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
        id="inline-eIUGbCAZpWWHv8h2d4XJ"
        data-layout='{"id":"INLINE"}'
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="House Cleaning Lead Generation"
        data-height="1600"
        data-layout-iframe-id="inline-eIUGbCAZpWWHv8h2d4XJ"
        data-form-id="eIUGbCAZpWWHv8h2d4XJ"
        title="House Cleaning Lead Generation"
      />
    </div>
  );
}
