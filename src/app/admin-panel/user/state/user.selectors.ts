import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IUserState } from "./user.state";

const getUserFeatureState = createFeatureSelector<IUserState>("userState");

export const getUserBlockReasons = createSelector(getUserFeatureState, (sliceState) => sliceState.blockUserReasons);

export const getUserDetails = createSelector(getUserFeatureState, (sliceState) => sliceState.userDetails);
