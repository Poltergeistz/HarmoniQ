import { json } from '@sveltejs/kit';
import { Client } from '@notionhq/client';
import { NOTION_INTEGRATION_KEY, NOTION_DATABASE_ID } from '$env/static/private';

interface SubscribeRequestBody {
  email: string;
  source: string;
}

const notion = new Client({ auth: NOTION_INTEGRATION_KEY });
const databaseId: string = NOTION_DATABASE_ID || '';

export async function POST({
  request,
}: {
  request: Request;
}): Promise<Response> {
  try {
    if (!notion) {
      throw new Error('Notion client is not properly initialized');
    }
    if (!databaseId) {
      throw new Error('Database ID is not provided');
    }

    const { email, source }: SubscribeRequestBody = await request.json();

    if (!email) {
      return json({ error: 'Email is required' }, { status: 400 });
    }

    const response = await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Email: {
          title: [{ text: { content: email } }]
        },
        Source: {
          select: { name: source || 'Unknown' }
        }
      }
    });

    return json({ success: true, message: 'Subscription successful!' });

  } catch (error: any) {
    console.error('Error saving to Notion:', error);

    // Return a detailed error response based on error type
    if (error.code === 'unauthorized') {
      return json({ error: 'Invalid API token' }, { status: 401 });
    } else if (error.code === 'not_found') {
      return json({ error: 'Database not found' }, { status: 404 });
    } else if (error.message === 'Notion client is not properly initialized') {
      return json({ error: 'Notion client is not initialized' }, { status: 500 });
    } else if (error.message === 'Database ID is not provided') {
      return json({ error: 'Database ID is missing' }, { status: 500 });
    } else {
      return json({ error: 'Something went wrong' }, { status: 500 });
    }
  }
}
