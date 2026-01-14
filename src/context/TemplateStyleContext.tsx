import { createContext, useContext } from "react";

type TemplateStyle = "glass" | "solid" | "outline";

type TemplateStyleContextValue = {
  style: TemplateStyle;
  setStyle: (style: TemplateStyle) => void;
};

const TemplateStyleContext = createContext<TemplateStyleContextValue | undefined>(
  undefined
);

const useTemplateStyle = () => {
  const context = useContext(TemplateStyleContext);
  if (!context) {
    throw new Error("useTemplateStyle must be used within TemplateStyleContext");
  }
  return context;
};

export type { TemplateStyle };
export { TemplateStyleContext, useTemplateStyle };
