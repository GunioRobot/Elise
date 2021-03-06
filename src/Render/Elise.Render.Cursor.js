//
//  Elise : Javascript Library rendering Music Scores
//  Copyright (C) 2011 Rodolphe Belouin <rodolphe.belouin@gmail.com>
//  Copyright (C) 2011 Vincent Giersch <vincent@giersch.fr>
//
//  This program is free software: you can redistribute it and/or modify
//  it under the terms of the GNU General Public License as published by
//  the Free Software Foundation, either version 3 of the License, or
//  (at your option) any later version.
//
//  This program is distributed in the hope that it will be useful,
//  but WITHOUT ANY WARRANTY; without even the implied warranty of
//  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//  GNU General Public License for more details.
//
//  You should have received a copy of the GNU General Public License
//  along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

Elise.Render.Cursor = function(render, x, y) {
    if (render === undefined)
        return Elise.error('You must set the render object');
    this.render = render;

    this.xOrigin = x;
    this.yOrigin = y;
    this.x = x;
    this.y = y;
};

Elise.Render.Cursor.prototype = {
    reset: function() {
        this.x = this.xOrigin;
        this.y = this.yOrigin;
    }
};
