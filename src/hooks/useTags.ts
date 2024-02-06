'use client'

import { Tag } from "@/@types/project";
import { tagService } from "@/services/tagService";
import { useEffect, useState } from "react";

interface TagOption {
  label: string;
  value: number;
}
export function useTags() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [selectedTags, setSelectedTags] = useState<TagOption[]>([]);
  const tagsIds = selectedTags.map((item) => item.value);

  async function fetchTags() {
    const { data: tags } = await tagService.getTags();
    console.log(tags);
    setTags(tags);
  }

  useEffect(() => {
    fetchTags();
  }, []);

  return { tags, selectedTags, setSelectedTags, tagsIds  };
}
