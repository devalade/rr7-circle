import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  layout("routes/layout.tsx", [
    route(":orgId/members", "./routes/organisation/members/page.tsx"),
    route(":orgId/projects", "./routes/organisation/projects/page.tsx"),
    route(":orgId/teams", "./routes/organisation/teams/page.tsx"),
    route(
      "/:orgId/team/:teamId/all",
      "./routes/organisation/team/[teamId]/all/page.tsx",
    ),
  ]),
] satisfies RouteConfig;
