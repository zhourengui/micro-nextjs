import dynamic from "next/dynamic";

const GrafishRegister = dynamic(() => import("./grafish-register"), {
  ssr: false,
});

export default function Home() {
  return <GrafishRegister />;
}
