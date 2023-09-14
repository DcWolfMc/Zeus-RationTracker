import React, { FunctionComponent, useMemo } from "react";
import { Text } from "./styles";
import { RFValue } from "react-native-responsive-fontsize";
import { formatNumber } from "react-native-currency-input";

interface Props {
  monthTotal: number;
}

export const MonthTotalValue: FunctionComponent<Props> = ({ monthTotal }) => {
  const formattedMonthTotal = formatNumber(monthTotal, { precision: 2 });
  const fontSize = useMemo(() => {
    // Defina um tamanho máximo para o valor antes de reduzir a fonte
    const maxFontSize = RFValue(32); // Tamanho máximo da fonte
    const maxLength = 10; // Número máximo de dígitos antes de reduzir a fonte

    // Se o valor formatado tiver mais dígitos do que o máximo permitido, reduza a fonte
    if (formattedMonthTotal.length > maxLength) {
      return maxFontSize - (formattedMonthTotal.length - maxLength) * 2; // Reduz a fonte com base na diferença de comprimento
    }

    return maxFontSize; // Mantém o tamanho padrão da fonte
  }, [formattedMonthTotal]);

  return (
    <Text style={{ fontSize }}>
      R$ {formattedMonthTotal}
    </Text>
  );
};
