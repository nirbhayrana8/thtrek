import DescriptionContentComponent from './DescriptionContentComponent';
import DescriptionContentContainer from './DescriptionComponentContainer';
import { DescriptionContextProvider  } from '../contexts/DescriptionContext';

export default function DescriptionComponent({ title, content, image, index }) {
	const data={title, content, image, index};

  return (
	<DescriptionContextProvider data={data}>
		<DescriptionContentContainer>
			<DescriptionContentComponent/>
		</DescriptionContentContainer>
	</DescriptionContextProvider>
  )
}
