import { Stack, Box, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  onPageChange: (page: number) => void;
}

export const Pagination = ({ onPageChange }: PaginationProps) => {
  return (
    <Stack mt="20" direction="row" justify="center" align="center" spacing="2">
      <PaginationItem number={1} onPageChange={() => {}} isCurrent />
      <PaginationItem number={2} onPageChange={() => {}} />
      <PaginationItem number={3} onPageChange={() => {}} />
      <PaginationItem number={4} onPageChange={() => {}} />
      <PaginationItem number={5} onPageChange={() => {}} />
    </Stack>
  );
};
