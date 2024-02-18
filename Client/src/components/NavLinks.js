import { Stack } from "@mui/material";
import DataLinks from "./DataLinks";

export default function NavLinks() {
  return (
    <>
      <Stack direction={"row"} gap={2}>
        <DataLinks
          data={[
            {
              title: "Home",
              links: [
                {
                  label: "Link 1",
                  url: "#",
                  subLinks: [
                    { label: "sublink1", url: "#" },
                    { label: "sublink2", url: "#" },
                  ],
                },
                { label: "Link 2", url: "#" },
              ],
            },
            {
              title: "mega menu",
              links: [
                {
                  label: "Link 3",
                  url: "#",
                  subLinks: [
                    { label: "sublink3", url: "#" },
                    { label: "sublink4", url: "#" },
                  ],
                },
                { label: "Link 4", url: "#" },
                {
                  label: "Link 5",
                  url: "#",
                  subLinks: [
                    { label: "sublink3", url: "#" },
                    { label: "sublink4", url: "#" },
                    { label: "sublink5", url: "#" },
                    { label: "sublink6", url: "#" },
                  ],
                },
              ],
            },
            {
              title: "full screen menu",
              links: [
                {
                  label: "Link 3",
                  url: "#",
                  subLinks: [
                    { label: "sublink3", url: "#" },
                    { label: "sublink4", url: "#" },
                    { label: "sublink5", url: "#" },
                    { label: "sublink6", url: "#" },
                    { label: "sublink7", url: "#" },
                    { label: "sublink8", url: "#" },
                  ],
                },
                { label: "Link 4", url: "#" },
                {
                  label: "Link 5",
                  url: "#",
                  subLinks: [
                    { label: "sublink3", url: "#" },
                    { label: "sublink4", url: "#" },
                    { label: "sublink5", url: "#" },
                    { label: "sublink6", url: "#" },
                  ],
                },
              ],
            },
            {
              title: "pages",
              rightAligned: true,
              links: [
                {
                  label: "Link 3",
                  url: "#",
                  subLinks: [
                    { label: "sublink3", url: "#" },
                    { label: "sublink4", url: "#" },
                  ],
                },
                { label: "Link 4", url: "#" },
                {
                  label: "Link 5",
                  url: "#"
                },
              ],
            },
            {
              title: "user account",
              rightAligned: true,
              links: [
                {
                  label: "Link 3",
                  url: "#"
                },
                { label: "Link 4", url: "#" },
                {
                  label: "Link 5",
                  url: "#",
                  subLinks: [
                    { label: "sublink3", url: "#" },
                    { label: "sublink6", url: "#" },
                  ],
                },
              ],
            },
            {
              title: "vendor account",
              rightAligned: true,
              links: [
                {
                  label: "Link 3",
                  url: "#",
                  subLinks: [
                    { label: "sublink3", url: "#" },
                    { label: "sublink4", url: "#" },
                  ],
                },
                { label: "Link 4", url: "#" },
                {
                  label: "Link 5",
                  url: "#",
                  subLinks: [
                    { label: "sublink3", url: "#" },
                    { label: "sublink4", url: "#" },
                    { label: "sublink5", url: "#" },
                    { label: "sublink6", url: "#" },
                  ],
                },
              ],
            },
          ]}
        />
      </Stack>
    </>
  );
}
