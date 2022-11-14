/**
 * # 設定項目
 * - マス目の数（横）
 * - マス目の数（縦）
 * - マスの幅
 * - 移動速度
 * - アクション可能範囲
 * - フィールドの幅
 */

export const field = {
  maxCoordinateX: 20,
  maxCoordinateY: 20,
  objectLength: 40,
};

// export class Field {
//   constructor({ maxCoordinateX = 20, maxCoordinateY = 20, objectLength = 40 }) {
//     this.maxCoordinateX = maxCoordinateX;
//     this.maxCoordinateY = maxCoordinateY;
//     this.objectLength = objectLength;
//   }

//   getCoordinateByPosition(position) {
//     return {
//       x: Math.round(position.x / this.objectLength),
//       y: Math.round(position.y / this.objectLength),
//     };
//   }

//   get maxCoordinate() {
//     return {
//       x: this.maxCoordinateX,
//       y: this.maxCoordinateY,
//     };
//   }

//   get objectLength() {
//     return this.objectLength;
//   }
// }

// type Props = {
//   emoji: string;

//   id: number;
// };

// export class NPC {
//   id: number;

//   emoji: string;

//   messages: string[];

//   constructor(id: number, emoji: string, messages: string[]) {
//     this.id = id;
//     this.emoji = emoji;
//     this.messages = messages;
//   }

//   action() {
//     console.log(this.messages.join('\n'));
//   }
// }
