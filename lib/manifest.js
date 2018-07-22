import {
  existsSync,
  readFileSync
} from 'fs';

export default function fsFunction(manifestPath) {
  if (!existsSync(manifestPath)) {
    return {};
  }
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf-8'));
  return manifest;
}