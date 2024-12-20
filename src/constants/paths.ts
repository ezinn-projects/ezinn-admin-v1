const PATHS = {
  HOME: "/",
  // rooms management
  ROOMS: "/rooms",
  NEW_ROOM: "/rooms/new",
  EDIT_ROOM: "/rooms/:id/edit",

  // user managemen
  SETTINGS: "/settings",
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  AMENITIES: "/amenities",
  STAFF: "/staff",
  ADMIN: "/admin",
  UNAUTHORIZED: "/unauthorized",
  NOT_FOUND: "/not-found",
  ROOM_TYPES: "/room-types",
  PRICING: "/pricing",
  CALENDAR: "/calendar",

  // room types management
  ROOM_TYPES_LISTS: "/room-types",
  ROOM_TYPES_UPSERT: "/room-types/upsert",
} as const;

export default PATHS;