import { Header, Spacer } from "components"
import { NextPage } from "next"

export const SongDetail: NextPage = () => {
  return (
    <div>
      <Header />
      <Spacer size={24} axis={"vertical"} />
      <main style={{ width: "calc(100% - 40px)", margin: "0 auto", fontSize: 18 }}>
        <h2 style={{ textAlign: "center", fontWeight: 100 }}>Fur Elise - Beethoven</h2>
        <Spacer axis="vertical" size={18} />
        <div style={{ height: 400, width: 600, backgroundColor: "grey", margin: "0 auto" }} />
        <div style={{ display: "flex", width: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 24 }}>
              Uploaded by <span style={{ color: "#3D79EF" }}>samouri</span>
            </span>
            <span style={{ fontSize: 13, color: "#64748B" }}>Upload date: Dec 1, 2021</span>
          </div>
          <button
            style={{
              backgroundColor: "var(--primary)",
              width: 270,
              height: 50,
              color: "white",
              fontSize: 24,
              marginLeft: "auto",
              borderRadius: 10,
              border: "1px solid #4CB6CB",
              padding: 0,
              marginTop: 9,
            }}
          >
            Download
          </button>
        </div>
      </main>
    </div>
  )
}
