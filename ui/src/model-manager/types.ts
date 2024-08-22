export const comfyModelFolderNames = [
  "checkpoints",
  "loras",
  "vae",
  "controlnet",
  "animatediff_models",
  "animatediff_motion_lora",
  "clip_vision",
  "clip",
  "diffusers",
  "embeddings",
  "gligen",
  "hypernetworks",
  "ipadapter",
  "mmdets/bbox",
  "onnx",
  "photomaker",
  "sams",
  "style_models",
  "ultralytics/bbox",
  "ultralytics/segm",
  "unet",
  "upscale_models",
  "vae_approx",
] as const;

export type ComfyModelFolderName = (typeof comfyModelFolderNames)[number];

export type FileNode = {
  name: string;
  path: string;
  size?: string;
  children?: FileNode[];
};
export const SYS_SEP = "/";
