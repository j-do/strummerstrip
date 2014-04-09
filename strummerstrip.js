/* 
 * Copyright 2014 Jason "J-Do" Hittle .
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var c_chromatic_scale = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
var c_major_scale = ['C', 'D', 'E', 'F', 'G', 'A', 'B'];
var major_prog = ['Major', 'Minor', 'Minor', 'Major', 'Major', 'Minor', 'Diminished'];
var modes = ['Ionian', 'Dorian', 'Phrygian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian'];
var chord_nums = ['I', 'ii', 'iii', 'IV', 'V', 'vi', 'vii'];

var patterns = []
patterns["Ionian"] = ["t", "t", "s", "t", "t", "t"];
patterns["Dorian"] = ["t", "s", "t", "t", "t", "s"];
patterns["Phrygian"] = ["s", "t", "t", "t", "s", "t"];
patterns["Lydian"] = ["t", "t", "t", "s", "t", "t"];
patterns["Mixolydian"] = ["t", "t", "s", "t", "t", "s"];
patterns["Aeolian"] = ["t", "s", "t", "t", "s", "t"];
patterns["Locrian"] = ["s", "t", "t", "s", "t", "t"];

var progressions = [];
progressions["Ionian"] = ['Major', 'Minor', 'Minor', 'Major', 'Major', 'Minor', 'Diminished'];
progressions["Dorian"] = ['Minor', 'Minor', 'Major', 'Major', 'Minor', 'Diminished', 'Major'];
progressions["Phrygian"] = ['Minor', 'Major', 'Major', 'Minor', 'Diminished', 'Major', 'Minor'];
progressions["Lydian"] = ['Major', 'Major', 'Minor', 'Diminished', 'Major', 'Minor', 'Minor'];
progressions["Mixolydian"] = ['Major', 'Minor', 'Diminished', 'Major', 'Minor', 'Minor', 'Major'];
progressions["Aeolian"] = ['Minor', 'Diminished', 'Major', 'Minor', 'Minor', 'Major', 'Major'];
progressions["Locrian"] = ['Diminished', 'Major', 'Minor', 'Minor', 'Major', 'Major', 'Minor'];

/**
 * The root note and mode give you back the song makin fixins
 * @param {string} root
 * @param {string} mode
 * @returns {Scale}
 */
function SongFixins(root, mode) {
    this.root = root;
    this.root_index = c_chromatic_scale.indexOf(this.root);
    this.mode = mode;
    this.mode_index = modes.indexOf(this.mode);
    this.scale = makeScale(root, mode);
    this.progression = progressions[mode];
}

function makeScale(root, mode) {
    var scale = [root];
    var chromatic = [];
    chromatic = pushToTop(c_chromatic_scale, root);
    var pattern = patterns[mode];
    var step = 0;
    for (i = 0; i <= pattern.length; i++) {
        step = (pattern[i] == 't') ? step + 2 : step + 1;
        if ($.inArray(chromatic[step], c_chromatic_scale) > -1) {
            scale.push(chromatic[step]);
        }
    }
    return scale;
}

function pushToTop(stack, top) {
    var os = stack;
    var i = 0;
    while (i < stack.indexOf(top)) {
        os.push(os.shift());
    }
    return os;
}