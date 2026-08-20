import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import AssettiSocietari from "@/pages/AssettiSocietari";
import Processi from "@/pages/Processi";
import Finanza from "@/pages/Finanza";
import Percorso from "@/pages/Percorso";
import Contatti from "@/pages/Contatti";
import Grazie from "@/pages/Grazie";
import Referenze from "@/pages/Referenze";
import QuandoIlProblemaArriva from "@/pages/QuandoIlProblemaArriva";
import MetricheEStatuto from "@/pages/MetricheEStatuto";
import AiSenzaGovernance from "@/pages/AiSenzaGovernance";
import PrimaCheManchiLaLiquidita from "@/pages/PrimaCheManchiLaLiquidita";
import FounderEAgenti from "@/pages/FounderEAgenti";
import QuantoValiQuantoRaccogli from "@/pages/QuantoValiQuantoRaccogli";
import { TemplateAHome, TemplateBHome, TemplateCHome, TemplateCColorHome, TemplateCLightHome, TemplateCMedHome, TemplateDHome, TemplateEHome, TemplateACriterio } from "@/pages/TemplateA";
import NotFound from "@/pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/assetti-societari" element={<AssettiSocietari />} />
          <Route path="/processi" element={<Processi />} />
          <Route path="/finanza" element={<Finanza />} />
          <Route path="/percorso" element={<Percorso />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/grazie" element={<Grazie />} />
          <Route path="/referenze" element={<Referenze />} />
          <Route path="/quando-il-problema-arriva" element={<QuandoIlProblemaArriva />} />
          <Route path="/metriche-e-statuto" element={<MetricheEStatuto />} />
          <Route path="/ai-senza-governance" element={<AiSenzaGovernance />} />
          <Route path="/prima-che-manchi-la-liquidita" element={<PrimaCheManchiLaLiquidita />} />
          <Route path="/founder-e-agenti" element={<FounderEAgenti />} />
          <Route path="/quanto-vali-quanto-raccogli" element={<QuantoValiQuantoRaccogli />} />
          <Route path="/template-a" element={<TemplateAHome />} />
          <Route path="/template-a-banda" element={<TemplateBHome />} />
          <Route path="/template-a-immersivo" element={<TemplateCHome />} />
          <Route path="/template-a-immersivo-colore" element={<TemplateCColorHome />} />
          <Route path="/template-a-immersivo-chiaro" element={<TemplateCLightHome />} />
          <Route path="/template-a-immersivo-medio" element={<TemplateCMedHome />} />
          <Route path="/template-a-reveal" element={<TemplateDHome />} />
          <Route path="/template-a-byline" element={<TemplateEHome />} />
          <Route path="/template-a-criterio" element={<TemplateACriterio />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
