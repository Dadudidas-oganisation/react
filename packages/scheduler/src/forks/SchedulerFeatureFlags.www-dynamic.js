/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// In www, these flags are controlled by GKs. Because most GKs have some
// population running in either mode, we should run our tests that way, too,
//
// Use __VARIANT__ to simulate a GK. The tests will be run twice: once
// with the __VARIANT__ set to `true`, and once set to `false`.

export const enableProfiling = __VARIANT__;

export const enableIsInputPending = __VARIANT__;
export const enableIsInputPendingContinuous = __VARIANT__;
export const frameYieldMs = 5;
export const continuousYieldMs = 10;
export const maxYieldMs = 10;

export const userBlockingPriorityTimeout = 250;
export const normalPriorityTimeout = 5000;
export const lowPriorityTimeout = 10000;
