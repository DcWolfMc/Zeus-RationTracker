import mongoose from "mongoose";

const purchaseSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Produto deve ter um nome"],
    },
    ration_weight: {
      type: Number,
      required: [true, "Produto precisa de peso em quilogramas (Kg)"],
    },
    quantity: {
      type: Number,
      required: [true, "Produto deve ter ao menos 1 em quantidade"],
      default: 1,
    },
    ration_price: {
      type: Number,
      required: [true, "Produto deve ter valor em Reais(R$) Ex: 10.00"],
    },
    date_of_purchase: {
      type: Date,
      required: [true, "Produto deve ter uma data de compra"],
      default: Date.now(),
    },
    observations: {
      type: String,
      required: false,
    },
    place_of_purchase: {
      type: String,
      required: false,
      default: "não definido",
    },
    ration_brand: {
      type: String,
      required: false,
      default: "não definido",
    },
  },
  { timestamps: {
    createdAt: 'created_at', // Use `created_at` to store the created date
    updatedAt: 'updated_at' // and `updated_at` to store the last updated date
  }}
);

export const Purchase = mongoose.model("Purchase", purchaseSchema);
