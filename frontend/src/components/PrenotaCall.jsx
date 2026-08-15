import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FadeIn } from "@/components/Editorial";

// IBAN da sostituire con quello reale prima della messa online
const IBAN = "IT73 D032 9601 6010 0006 4413 394";

const FORMATS = [
  {
    id: "intro",
    label: "10 minuti — gratuita",
    title: "Intro & Focus Call",
    paid: false,
    causale: null,
  },
  {
    id: "executive",
    label: "30 minuti — 300 €",
    title: "Executive Advisory",
    paid: true,
    causale: "Executive Advisory",
  },
  {
    id: "sprint",
    label: "3 sessioni da 60 minuti (circa 3 settimane) — 900 €",
    title: "Corporate Strategic Sprint",
    paid: true,
    causale: "Corporate Strategic Sprint",
  },
];

const CATEGORIES = [
  "Finance",
  "Amministrazione-Finanza-Controllo",
  "Organizzazione",
  "AI",
  "Innovation",
  "Startup",
  "Open Innovation",
  "Governance",
  "Fundraising",
  "Altro",
];

const URGENCIES = ["Entro un mese", "Entro tre mesi", "Non urgente"];

const encode = (data) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const inputClass =
  "mt-2 w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition-colors duration-200 focus:border-navy focus:ring-1 focus:ring-navy";
const labelClass = "block text-sm font-medium text-gray-700";

export default function PrenotaCall() {
  const [form, setForm] = useState({
    azienda: "",
    ruolo: "",
    tema: "",
    problema: "",
    risultato: "",
    urgenza: "",
    categoria: "",
    email: "",
  });
  const [formato, setFormato] = useState("");
  const [botField, setBotField] = useState("");
  const [status, setStatus] = useState("idle"); // idle | submitting | error
  const navigate = useNavigate();

  const selected = FORMATS.find((f) => f.id === formato);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formato) return;
    setStatus("submitting");
    const payload = {
      "form-name": "prenota-call",
      "bot-field": botField,
      ...form,
      formato: selected ? selected.label : "",
    };
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode(payload),
      });
      if (!res.ok) throw new Error("Network response was not ok");
      navigate("/grazie", {
        state: { paid: Boolean(selected?.paid), formato: selected ? selected.title : "" },
      });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <FadeIn>
      <form
        name="prenota-call"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
        data-testid="prenota-form"
        className="mt-10 space-y-7"
      >
        {/* Campi tecnici Netlify */}
        <input type="hidden" name="form-name" value="prenota-call" />
        <p className="hidden">
          <label>
            Non compilare se sei umano:{" "}
            <input
              name="bot-field"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
            />
          </label>
        </p>

        <div>
          <label htmlFor="pc-azienda" className={labelClass}>
            Nome azienda
          </label>
          <input
            id="pc-azienda"
            name="azienda"
            type="text"
            required
            value={form.azienda}
            onChange={handleChange}
            data-testid="pc-azienda"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="pc-ruolo" className={labelClass}>
            Ruolo
          </label>
          <input
            id="pc-ruolo"
            name="ruolo"
            type="text"
            required
            value={form.ruolo}
            onChange={handleChange}
            data-testid="pc-ruolo"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="pc-tema" className={labelClass}>
            Tema
          </label>
          <input
            id="pc-tema"
            name="tema"
            type="text"
            required
            value={form.tema}
            onChange={handleChange}
            data-testid="pc-tema"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="pc-problema" className={labelClass}>
            Descrivi in poche righe il problema
          </label>
          <textarea
            id="pc-problema"
            name="problema"
            required
            maxLength={500}
            rows={4}
            value={form.problema}
            onChange={handleChange}
            data-testid="pc-problema"
            className={`${inputClass} resize-y`}
          />
          <span className="mt-1 block text-xs text-gray-400">
            {form.problema.length}/500
          </span>
        </div>

        <div>
          <label htmlFor="pc-risultato" className={labelClass}>
            Quale risultato vorresti ottenere?
          </label>
          <textarea
            id="pc-risultato"
            name="risultato"
            required
            rows={3}
            value={form.risultato}
            onChange={handleChange}
            data-testid="pc-risultato"
            className={`${inputClass} resize-y`}
          />
        </div>

        <div>
          <label htmlFor="pc-urgenza" className={labelClass}>
            Entro quando vuoi prendere una decisione?
          </label>
          <select
            id="pc-urgenza"
            name="urgenza"
            required
            value={form.urgenza}
            onChange={handleChange}
            data-testid="pc-urgenza"
            className={inputClass}
          >
            <option value="" disabled>
              Seleziona…
            </option>
            {URGENCIES.map((u) => (
              <option key={u} value={u}>
                {u}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pc-categoria" className={labelClass}>
            Categoria
          </label>
          <select
            id="pc-categoria"
            name="categoria"
            required
            value={form.categoria}
            onChange={handleChange}
            data-testid="pc-categoria"
            className={inputClass}
          >
            <option value="" disabled>
              Seleziona…
            </option>
            {CATEGORIES.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="pc-email" className={labelClass}>
            Email di contatto
          </label>
          <input
            id="pc-email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={handleChange}
            data-testid="pc-email"
            className={inputClass}
          />
        </div>

        {/* Selezione formato */}
        <fieldset className="pt-2">
          <legend className="text-sm font-medium text-gray-700">
            Scegli il formato
          </legend>
          <div className="mt-4 grid grid-cols-1 gap-3">
            {FORMATS.map((f) => {
              const active = formato === f.id;
              return (
                <label
                  key={f.id}
                  data-testid={`pc-formato-${f.id}`}
                  className={`flex cursor-pointer flex-col rounded-lg border p-5 transition-all duration-200 ${
                    active
                      ? "border-navy bg-[#F4F6FA] shadow-[0_10px_30px_-20px_rgba(30,58,107,0.6)]"
                      : "border-gray-200 hover:border-navy/40"
                  }`}
                >
                  <span className="flex items-baseline gap-3">
                    <input
                      type="radio"
                      name="formato"
                      value={f.label}
                      checked={active}
                      onChange={() => setFormato(f.id)}
                      required
                      className="mt-1 h-4 w-4 accent-navy"
                    />
                    <span>
                      <span className="block font-serif text-lg font-semibold tracking-tight text-gray-900">
                        {f.title}
                      </span>
                      <span className="mt-0.5 block text-sm text-gray-600">
                        {f.label}
                      </span>
                    </span>
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Box IBAN condizionale per formati a pagamento */}
        {selected?.paid && (
          <div
            data-testid="pc-iban-box"
            className="rounded-lg border border-[#E5EAF3] bg-[#F4F6FA] p-6"
          >
            <p className="text-base leading-relaxed text-gray-700">
              Prima della call, effettua il bonifico a:
            </p>
            <p className="mt-3 font-serif text-lg text-navy break-words">{IBAN}</p>
            <p className="mt-3 text-sm text-gray-600">
              Causale: {form.azienda ? form.azienda : "[Nome azienda]"} —{" "}
              {selected.causale}
            </p>
          </div>
        )}

        {status === "error" && (
          <p data-testid="pc-error" className="text-sm text-red-600">
            Si è verificato un problema nell'invio. Riprova o scrivimi via email.
          </p>
        )}

        <button
          type="submit"
          disabled={status === "submitting"}
          data-testid="pc-submit"
          className="group inline-flex items-center gap-2 rounded-full bg-navy px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-[#1B2A4A] disabled:opacity-60"
        >
          {status === "submitting" ? "Invio…" : "Prenota"}
          <span
            aria-hidden
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>
      </form>
    </FadeIn>
  );
}
