/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import prettyFormat = require('pretty-format');

export default function isError(
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  potentialError: any,
): {isError: boolean; message: string | null} {
  // duck-type Error, see #2549
  const isError =
    potentialError !== null &&
    typeof potentialError === 'object' &&
    typeof potentialError.message === 'string' &&
    typeof potentialError.name === 'string';

  const message = isError
    ? null
    : `Failed: ${prettyFormat(potentialError, {maxDepth: 3})}`;

  return {isError, message};
}
