/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const provchain = require('./lib/provchain');

module.exports.provchain = provchain;
module.exports.contracts = [ provchain ];
