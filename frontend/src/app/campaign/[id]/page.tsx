"use client";

import { useCampaign } from "@/hooks/useSoroban";
import { ShareButton } from "@/components/ShareButton";
import { Skeleton } from "@/components/ui/skeleton";

export default function CampaignDetails({ params }: { params: { id: string } }) {
  const { data: campaign, isLoading } = useCampaign(BigInt(params.id));

  return (
    <div className="p-8 max-w-4xl mx-auto space-y-6">
      <div className="flex justify-between items-start">
        <h1 className="text-3xl font-bold">
          {isLoading ? (
            <Skeleton className="h-9 w-64" />
          ) : (
            campaign?.title || `Campaign #${params.id}`
          )}
        </h1>
        {campaign && <ShareButton campaign={campaign} />}
      </div>
    </div>
  );
}
