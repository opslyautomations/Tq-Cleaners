export default function GHLForm({ minHeight = "1464px" }: { minHeight?: string }) {
  return (
    <div style={{ minHeight, height: minHeight }} className="w-full">
      <iframe
        src="https://api.opslyautomations.com/widget/form/eIUGbCAZpWWHv8h2d4XJ"
        style={{ width: "100%", height: minHeight, border: "none", borderRadius: "3px" }}
        id="inline-eIUGbCAZpWWHv8h2d4XJ"
        data-layout={`{"id":"INLINE"}`}
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="House Cleaning Lead Generation"
        data-height="1464"
        data-layout-iframe-id="inline-eIUGbCAZpWWHv8h2d4XJ"
        data-form-id="eIUGbCAZpWWHv8h2d4XJ"
        title="House Cleaning Lead Generation"
      />
    </div>
  );
}
