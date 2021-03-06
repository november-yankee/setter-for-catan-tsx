import {
  EdgePosition,
  edgePositionToInt,
  FacePosition,
  facePositionToInt,
  VertexPosition,
  vertexPositionToInt,
} from './Coordinates';

it('should convert edge position string to its corresponding number value', () => {
  expect(edgePositionToInt('RIGHT')).toBe(1);
});

it('should convert edge position enum to its corresponding number value', () => {
  expect(edgePositionToInt(EdgePosition.RIGHT)).toBe(1);
});

it('should convert vertex position string to its corresponding number value', () => {
  expect(vertexPositionToInt('TOP_RIGHT')).toBe(1);
});

it('should convert vertex position enum to its corresponding number value', () => {
  expect(vertexPositionToInt(VertexPosition.TOP_RIGHT)).toBe(1);
});

it('should convert face position string to its corresponding number value', () => {
  expect(facePositionToInt('FACE_DOWN')).toBe(1);
});

it('should convert face position enum to its corresponding number value', () => {
  expect(facePositionToInt(FacePosition.FACE_DOWN)).toBe(1);
});
