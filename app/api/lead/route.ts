import { NextRequest, NextResponse } from "next/server";

// In-memory store for demo purposes. Resets on every server restart/redeploy.
// In a real app this would write to a database (e.g. Postgres, Airtable, HubSpot).
const leads: Array<Record<string, unknown>> = [];

export async function POST(req: NextRequest) {
  let body: Record<string, unknown>;

  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body." },
      { status: 400 }
    );
  }

  const { email, name, company } = body as {
    email?: string;
    name?: string;
    company?: string;
  };

  if (!email || !name || !company) {
    return NextResponse.json(
      { message: "Name, email, and company are required." },
      { status: 400 }
    );
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { message: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  leads.push({ ...body, submittedAt: new Date().toISOString() });

  return NextResponse.json(
    { message: "Lead received.", total: leads.length },
    { status: 201 }
  );
}

export async function GET() {
  return NextResponse.json({ count: leads.length, leads });
}
