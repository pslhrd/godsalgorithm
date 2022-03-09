  // uniform vec2 u_resolution;
  // uniform float u_amount;
  // uniform float u_speed;
  // uniform float u_time;
  // uniform float u_size;
  // uniform float u_range;
  // varying float v_alpha;

  // vec3 getOffset(float ratio, float threshold) {
  //   return vec3(
  //     cos((ratio * 80.0 + 10.0) * threshold) * 20.0 * threshold,
  //     (sin((ratio * 90.0 + 30.0) * threshold) + 1.0) * 5.0 * threshold + mix(u_resolution.y * u_range, -u_resolution.y * u_range, ratio / threshold),
  //     sin((ratio * 70.0 + 20.0) * threshold) * 20.0 * threshold
  //   );
  // }

  void main() {
    // float indexRatio = position.y / u_amount;
    // float threshold = 0.7 + indexRatio * 0.3;
    // float ratio = mod(u_time - indexRatio * 3.0, threshold);
    // vec3 offset = getOffset(ratio, threshold);
    // vec3 pos = position;
    // pos += offset;

    // float perspect = (1600.0 - pos.z) / 1600.0;
    // pos.x *= perspect;
    // pos.y *= perspect;
    // pos.x *= 2.0 / u_resolution.x;
    // pos.y *= 2.0 / u_resolution.y;
    // pos.z = 0.0;
    // gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    // gl_PointSize = u_size * perspect;
    // v_alpha = perspect;
  }