import { FunctionComponent, useMemo } from "react";
import { Text } from "./styles";
import { priceFormatter } from "../../utils/formatter";


interface Props {
  totalValue: number;
  variant?: "green"
}

export const InfoBoxTotalValue: FunctionComponent<Props> = ({ totalValue,variant }) => {
  const formattedMonthTotal = priceFormatter.format(totalValue);
  const fontSize = useMemo(() => {
    // Defina um tamanho máximo para o valor antes de reduzir a fonte
    const maxFontSize = 32 // Tamanho máximo da fonte
    const maxLength = 16; // Número máximo de dígitos antes de reduzir a fonte

    // Se o valor formatado tiver mais dígitos do que o máximo permitido, reduza a fonte
    if (formattedMonthTotal.length > maxLength) {
      return maxFontSize - (formattedMonthTotal.length - maxLength) * 2; // Reduz a fonte com base na diferença de comprimento
    }

    return maxFontSize; // Mantém o tamanho padrão da fonte
  }, [formattedMonthTotal]);

  return (
    <Text variant={variant} style={{ fontSize }}>
      {formattedMonthTotal}
    </Text>
  );
};
