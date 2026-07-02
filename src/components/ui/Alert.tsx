import { CheckCircle2, XCircle } from "lucide-react";

export default function Alert({ type, message }: { type: "success" | "error"; message: string }) {
  const isSuccess = type === "success";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px 16px",
        borderRadius: "12px",
        background: isSuccess ? "#EAF7EE" : "#FDECEC",
        color: isSuccess ? "#1E7A38" : "#C0392B",
        fontSize: "14px",
        fontWeight: 600,
        marginBottom: "18px",
      }}
    >
      {isSuccess ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
      <span>{message}</span>
    </div>
  );
}
