"use client";
import { useEffect, useRef, useState } from "react";

interface GHLFormProps {
  /** Fallback height while the iframe reports its true size via postMessage */
  minHeight?: string;
}

export default function GHLForm({ minHeight = "900px" }: GHLFormProps) {
  const [height, setHeight] = useState(minHeight);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      try {
        const raw = event.data;
        const data = typeof raw === "string" ? JSON.parse(raw) : raw;

        // GHL sends several shapes depending on version
        let reportedHeight: number | undefined;

        if (data?.type === "iframeHeight" && typeof data.height === "number") {
          reportedHeight = data.height;
        } else if (data?.type === "iframeResize" && typeof data.height === "number") {
          reportedHeight = data.height;
        } else if (data?.type === "iframeResize" && typeof data.data === "number") {
          reportedHeight = data.data;
        } else if (typeof data?.height === "number" && data.height > 100) {
          reportedHeight = data.height;
        }

        if (reportedHeight && reportedHeight > 100) {
          // Add a small buffer so the bottom consent text is never clipped
          setHeight(`${reportedHeight + 40}px`);
        }
      } catch {
        // non-JSON message from another origin — ignore
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div style={{ height }} className="w-full transition-[height] duration-300">
      <iframe
        ref={iframeRef}
        src="https://api.opslyautomations.com/widget/form/eIUGbCAZpWWHv8h2d4XJ"
        style={{ width: "100%", height: "100%", border: "none", borderRadius: "3px" }}
        id="inline-eIUGbCAZpWWHv8h2d4XJ"
        data-layout={`{"id":"INLINE"}`}
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="House Cleaning Lead Generation"
        data-layout-iframe-id="inline-eIUGbCAZpWWHv8h2d4XJ"
        data-form-id="eIUGbCAZpWWHv8h2d4XJ"
        title="House Cleaning Lead Generation"
      />
    </div>
  );
}
