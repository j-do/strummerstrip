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
$(function() {
    makeTable(chord_nums, c_major_scale, major_prog);
    //KEY CHANGE BUTTONS
    $('#keyChange').change(function() {
        var sf = new SongFixins($(this).val(), $('#modeChange').val())
        makeTable(chord_nums, sf.scale, sf.progression);
        return false;
    });
    //MODE CHANGE BUTTONS
    $('#modeChange').change(function() {
        var sf = new SongFixins($('#keyChange').val(), $(this).val());
        makeTable(chord_nums, sf.scale, sf.progression);
        return false;
    });

    function makeTable(chordNums, scale, progression) {
        $('#chords > tbody').empty();
        
        $("#chords > tbody").append("<tr>");
        for (i = 0; i < chordNums.length; i++) {
            $("#chords > tbody").append("<th class="+chordNums[i]+">" + chordNums[i] + "</th>");
        }
        $("#chords > tbody").append("</tr>");
        
        $("#chords > tbody").append("<tr>");
        for (i = 0; i < chordNums.length; i++) {
            $("#chords > tbody").append("<td class="+chordNums[i]+">" + scale[i]+ " " + progression[i] + "</td>");
        }
        $("#chords > tbody").append("</tr>");
        return false;
    }
});


