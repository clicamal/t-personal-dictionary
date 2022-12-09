/*
  Copyright (C) 2022  Tarcísio J. S. Rodrigues <justother94@gmail.com>

  This file is part of t-personal-dictionary, and it is licensed
  under the GNU General Public License 3.0. A copy of the license
  can be viewed at <https://www.gnu.org/licenses/gpl-3.0.html>.

  t-personal-dictionary is distributed in the hope that it will be useful,
  but WITHOUT ANY WARRANTY; without even the implied warranty of
  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  GNU General Public License for more details.
*/

interface DefinitionInterface {
    word: string,
    translation: string,
    language: string
}

export default DefinitionInterface;
