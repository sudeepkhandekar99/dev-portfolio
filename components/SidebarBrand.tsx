import BreathingText from "@/components/fancy/text/breathing-text";

export default function SidebarBrand() {
  return (
    <div className="text-sm tracking-wide">
    <BreathingText
        className="opacity-90"
        as="div"
        fromFontVariationSettings="'wght' 350"
        toFontVariationSettings="'wght' 600"
        >
        sudeep k.
    </BreathingText>
      {/* <div className="opacity-90">sudeep k.</div> */}
      {/* <div className="opacity-90">नमस्ते</div> */}

      {/* <div className="mt-10 text-xs text-[color:var(--muted)]">
        welcome to my little corner on the internet
      </div> */}
    </div>
  );
}