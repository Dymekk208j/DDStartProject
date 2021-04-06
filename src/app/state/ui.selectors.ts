import { IUiState } from "./ui.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";

const getUiFeatureState = createFeatureSelector<IUiState>("uiState");
