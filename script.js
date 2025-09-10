pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.worker.min.js`;

    document.addEventListener('DOMContentLoaded', function() {

        // --- Sistema de Internacionalização (i18n) ---
        const translations = {
            'pt': {
                page_title: "Canvas Interativo - MapMent",
                coords_nothing: "Nada selecionado",
                coords_items: "Itens selecionados",
                coords_arrow: "Seta selecionada",
                hint_toggle: "Pressione <kbd>H</kbd> para mostrar/esconder os atalhos",
                hint_nav_title: "Navegação e Visualização:",
                hint_pan: "Segure <kbd>Shift</kbd> ou <kbd>Clique Meio</kbd> para mover o mapa",
                hint_zoom: "Use o <kbd>Scroll</kbd> para dar zoom",
                hint_pages: "Use <kbd>PageUp</kbd> / <kbd>PageDown</kbd> para mudar de página",
                hint_sidebar: "Use <kbd>G</kbd> para esconder/mostrar painel lateral",
                hint_coords: "<kbd>N</kbd> para esconder/mostrar coordenadas",
                hint_actions_title: "Ações e Atalhos:",
                hint_add: "<kbd>Shift</kbd> + <kbd>A</kbd> para adicionar conteúdo",
                hint_duplicate: "<kbd>Shift</kbd> + <kbd>D</kbd> para duplicar/adicionar",
                hint_rename_block: "<kbd>F2</kbd> / <kbd>R</kbd> para renomear o bloco",
                hint_add_slide: "<kbd>Shift</kbd> + <kbd>+</kbd> para adicionar slide",
                hint_delete_slide: "<kbd>Shift</kbd> + <kbd>-</kbd> para deletar slide",
                hint_smart_color: "<kbd>B</kbd> para paleta de cores inteligente",
                hint_parent_move: "<kbd>P</kbd> para ativar/desativar movimento em grupo",
                hint_delete: "<kbd>Delete</kbd> para apagar itens",
                hint_undo: "<kbd>Ctrl</kbd> + <kbd>Z</kbd> para desfazer",
                hint_redo: "<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>Z</kbd> para refazer",
                hint_save: "<kbd>Ctrl</kbd> + <kbd>S</kbd> para salvar",
                hint_load: "<kbd>Ctrl</kbd> + <kbd>L</kbd> para carregar",
                sidebar_customize: "Customizar",
                sidebar_blocks_list: "Guia do Mapa Mental",
                sidebar_block: "Bloco",
                sidebar_background: "Fundo",
                sidebar_border: "Borda",
                sidebar_handles: "Alças",
                sidebar_color: "Cor",
                sidebar_visible: "Beiradas visíveis",
                sidebar_show_in_list: "Mostrar na Lista",
                sidebar_text: "Texto",
                sidebar_size: "Tamanho (px)",
                sidebar_font: "Fonte",
                font_default: "Padrão",
                sidebar_embed: "Link Incorporado",
                sidebar_arrow: "Seta",
                sidebar_grid: "Grade",
                sidebar_lines: "Linhas", 
                sidebar_pages: "Apresentação",
                sidebar_families: "Famílias",
                sidebar_family: "Família",
                sidebar_actions: "Ações",
                btn_add_content: "Adicionar",
                btn_arrow_mode: "Modo Seta",
                btn_save: "Salvar",
                btn_load: "Carregar",
                btn_snap: "Encaixe",
                btn_parent_move: "Grupo",
                menu_move: "Mover",
                menu_move_to: "Mover Para >",
                menu_move_prev: "Pág. anterior",
                menu_move_next: "Próxima pág.",
                menu_move_specific: "Pág. nº:",
                menu_rename: "Renomear (F2 / R)",
                menu_add: "Adicionar >",
                menu_add_text: "Bloco de Texto",
                menu_from_file: "Do Arquivo >",
                menu_add_media: "Imagem / Vídeo",
                menu_add_pdf: "PDF como Slides",
                menu_add_phet: "PhET Colorado",
                menu_from_link: "Do Link >",
                menu_add_generic_site: "Site Genérico",
                color_picker_title: "Seletor de Cores",
                btn_cancel: "Cancelar",
btn_confirm: "Confirmar",
                toast_snap_on: "Encaixe na Grade Ativado",
                toast_snap_off: "Encaixe na Grade Desativado",
                toast_parent_move_on: "Movimento em Grupo Ativado",
                toast_parent_move_off: "Movimento em Grupo Desativado",
                toast_page_added: "Página {page} adicionada",
                toast_page_deleted: "{count} página(s) deletada(s).",
                toast_cant_delete_last: "Não é possível apagar a última página.",
                toast_pdf_importing: "Importando {name}... Isso pode levar um momento.",
                toast_pdf_success: "Importado com sucesso {numPages} páginas.",
                toast_pdf_error: "Falha ao importar PDF. Veja o console para detalhes.",
                toast_file_loaded: "Arquivo carregado com sucesso!",
                toast_file_error: "Falha ao carregar arquivo. Pode estar corrompido.",
                toast_media_error: "Não foi possível carregar a imagem ou vídeo da URL.",
                toast_block_renamed: "Bloco renomeado para '{name}'.",
                toast_block_hidden_in_list: "Bloco oculto da lista.",
                toast_block_shown_in_list: "Bloco agora visível na lista.",
                toast_blocks_moved: "{count} bloco(s) movido(s) para a pág. {page}.",
                toast_invalid_page: "Número da página inválido!",
                prompt_media_url: "Insira a URL da Imagem ou Vídeo (YouTube, Vimeo, etc.):",
                prompt_pdf_url: "Insira a URL do PDF para importar como slides:",
                prompt_desmos_url: "Insira a URL do gráfico Desmos:",
                prompt_geogebra_url: "Insira a URL do applet GeoGebra (ex: de compartilhar > incorporar):",
                prompt_phet_url: "Insira a URL da simulação PhET Colorado:",
                prompt_generic_site_url: "Insira a URL do site para incorporar:",
            }
        };
        let currentLangStrings = translations['pt'];

        function setLanguage(lang) {
            const langCode = lang.split('-')[0];
            const supportedLangs = ['pt'];
            const finalLang = supportedLangs.includes(langCode) ? langCode : 'pt';

            currentLangStrings = translations[finalLang] || translations['pt'];
            document.documentElement.lang = finalLang;

            document.querySelectorAll('[data-translate-key]').forEach(el => {
                const key = el.dataset.translateKey;
                if (currentLangStrings[key]) {
                    if (key.startsWith('hint_')) {
                        el.innerHTML = currentLangStrings[key];
                    } else {
                        el.textContent = currentLangStrings[key];
                    }
                }
            });
             document.title = currentLangStrings.page_title;
        }


        const container = document.getElementById('container');
        const grid = document.getElementById('grid');
        const svgCanvas = document.getElementById('arrow-svg');
        const svgDefs = svgCanvas.querySelector('defs');
        const pageTitleEl = document.getElementById('page-title');
        const projectTitleEl = document.getElementById('project-title');
        const coordsDisplay = document.getElementById('coordinates');
        const addContentBtn = document.getElementById('add-content-btn');
        const toggleArrowModeBtn = document.getElementById('toggle-arrow-mode-btn');
        const saveBtn = document.getElementById('save-btn');
        const loadBtn = document.getElementById('load-btn');
        const fileLoader = document.getElementById('file-loader');
        const shortcutHint = document.getElementById('shortcut-hint');
        const contextMenu = document.getElementById('context-menu');
        const prevPageBtn = document.getElementById('prev-page-btn');
        const nextPageBtn = document.getElementById('next-page-btn');
        const addPageBtn = document.getElementById('add-page-btn');
        const deletePageBtn = document.getElementById('delete-page-btn');
        const pageInfoDisplay = document.getElementById('page-info-display');
        const pagesList = document.getElementById('pages-list');
        const sidebar = document.querySelector('.sidebar');
        const toggleSnapBtn = document.getElementById('toggle-snap-btn');
        const toggleParentMoveBtn = document.getElementById('toggle-parent-move-btn');
        const familySelect = document.getElementById('family-select');
        const familiesList = document.getElementById('families-list');
        const addFamilyBtn = document.getElementById('add-family-btn');
        const newFamilyNameInput = document.getElementById('new-family-name');
        const blocksList = document.getElementById('blocks-list');
        const renameBlockForm = document.getElementById('rename-block-form');
        const renameBlockInput = document.getElementById('rename-block-input');
        const renameBlockBtn = document.getElementById('rename-block-btn');
        const showInListCheckbox = document.getElementById('show-in-list-checkbox');

        const state = {
            isDragging: false, isPanning: false, isEditing: false, isArrowMode: false, isDrawingArrow: false,
            isResizing: false,
            isMarqueeSelecting: false,
            isSnapEnabled: true,
            isParentMoveEnabled: true,
            isEditingCoords: false,
            resizeDirection: '',
            resizeInitialRect: null,
            resizeInitialStates: [],
            currentBlock: null,
            arrowStartBlock: null,
            selection: [],
            lastSelectedItem: null,
            startX: 0, startY: 0, mouseMoved: false, lastMouseX: 0, lastMouseY: 0,
            dragInitialPositions: [],
            contextMenuX: 0, contextMenuY: 0,
            gridX: 0, gridY: 0,
            blockCounter: 1,
            scale: 1,
            tempArrow: null,
            ctrlPressed: false,
            lastBlockCreationAction: () => addNewBlock({ contentModel: [{ text: 'Novo Bloco.', style: {} }] }),
            activeEditingElement: null,
            marqueeBox: null,
            marqueeStartX: 0,
            marqueeStartY: 0,
            mouseDownTarget: null,
            marqueeHasMoved: false,
            activeContentModel: [],
            pages: [],
            currentPageIndex: 0,
            selectedPageIndices: new Set(),
            projectTitle: "Untitled MapMent",
            families: [],
            history: [],
            historyIndex: -1,
            MAX_HISTORY_STATES: 32,
            draggedListItem: null
        };
    
        pagesList.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(pagesList, e.clientY);
            if (state.draggedListItem) {
                 if (afterElement == null) {
                    pagesList.appendChild(state.draggedListItem);
                } else {
                    pagesList.insertBefore(state.draggedListItem, afterElement);
                }
            }
        });

        pagesList.addEventListener('drop', e => {
            e.preventDefault();
            if (!state.draggedListItem) return;

            const newOrderOriginalIndices = [...pagesList.querySelectorAll('li')].map(li => parseInt(li.dataset.pageIndex));
            
            const oldPages = [...state.pages];
            const oldCurrentPageObject = state.pages[state.currentPageIndex];

            state.pages = newOrderOriginalIndices.map(originalIndex => oldPages[originalIndex]);
            state.currentPageIndex = state.pages.indexOf(oldCurrentPageObject);
            state.selectedPageIndices.clear();
            recordState();
            updatePagesList();
        });
        
        let cr='Right to copy: Bernardo Teixeira Mendonça - 09/072024';

        setLanguage(navigator.language);

        shortcutHint.style.display = 'block';
        setTimeout(() => {
            shortcutHint.style.display = 'none';
        }, 30000);

        function initialize() {
            state.projectTitle = "Untitled MapMent";
            projectTitleEl.textContent = state.projectTitle;
            populateFontSizeSelector(); 
            const initialPage = {
                title: `Página 1`,
                blocks: [],
                arrows: [],
                viewport: { gridX: 0, gridY: 0, scale: 0.7 },
                styles: {},
                families: []
            };
            state.blockCounter++;
            state.pages = [initialPage];
            state.currentPageIndex = 0;
            loadPage(0, true);
            initializeColorPickers();
            recordState(); 
            updateCoordinates();
        }
        
        function populateFontSizeSelector() {
            const fontSizes = [8, 9, 10, 11, 12, 14, 15, 16, 18, 20, 24, 30, 36, 48, 64, 72];
            const sizeSelect = document.getElementById('text-size');
            sizeSelect.innerHTML = '';
            fontSizes.forEach(size => {
                const option = document.createElement('option');
                option.value = size;
                option.textContent = size;
                sizeSelect.appendChild(option);
            });
        }

        class Block {
            constructor(config) {
                // Properties from config
                this.id = config.id || `block-${state.blockCounter++}`;
                this.x = config.x;
                this.y = config.y;
                this.width = config.width || '250px';
                this.height = config.height; // can be null/undefined
                this.bgColor = config.bgColor || 'var(--panel-bg)';
                this.borderColor = config.borderColor;
                this.zIndex = config.zIndex || state.blockCounter;
                this.handleColor = config.handleColor;
                this.handleDisplay = config.handleDisplay;
                this.familyId = config.familyId;
                this.showInList = config.showInList !== false;
                this.contentModel = config.contentModel || [];
                this.name = config.name || `Bloco ${this.id.split('-')[1]}`.replace(' (cópia)','') ;

                if (config.htmlContent) { 
                    const tempContentEl = document.createElement('div');
                    this.contentModel = parseContent(tempContentEl, config.htmlContent);
                }

                // Create the element and link it
                this.element = this.createElement();
                this.element.blockInstance = this;

                // Keep a reference to the contentModel on the element for now to minimize changes elsewhere
                this.element.contentModel = this.contentModel;

                // Initial render
                this.renderContent();
                this.updateNameDisplay();

                // Attach listeners
                this.attachEventListeners();
                
                // Add to grid
                grid.appendChild(this.element);
            }

            createElement() {
                const block = document.createElement('div');
                block.id = this.id;
                block.className = 'block';
                block.style.left = `${this.x}px`;
                block.style.top = `${this.y}px`;
                block.style.width = this.width;
                if (this.height) block.style.height = this.height;
                block.style.backgroundColor = this.bgColor;
                if (this.borderColor) block.style.borderColor = this.borderColor;
                block.style.zIndex = this.zIndex;
                if (this.handleColor) block.style.setProperty('--handle-color', this.handleColor);
                if (this.handleDisplay) block.style.setProperty('--handle-display', this.handleDisplay);
                if (this.familyId) block.dataset.familyId = this.familyId;
                
                block.dataset.showInList = this.showInList;
                block.dataset.name = this.name;

                const nameEl = document.createElement('div');
                nameEl.className = 'block-name';
                block.appendChild(nameEl);

                const contentEl = document.createElement('div');
                contentEl.className = 'block-content';
                block.appendChild(contentEl);

                const handles = ['n', 'ne', 'e', 'se', 's', 'sw', 'w', 'nw'];
                handles.forEach(handle => {
                    const handleEl = document.createElement('div');
                    handleEl.className = `resize-handle handle-${handle}`;
                    block.appendChild(handleEl);
                });
                return block;
            }

            attachEventListeners() {
                this.element.addEventListener('mousedown', (e) => handleBlockMouseDown(e, this.element));
                this.element.addEventListener('contextmenu', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    if (!state.selection.includes(this.element)) {
                       updateSelection(this.element, e.shiftKey);
                    }
                    showContextMenu(e.clientX, e.clientY, true);
                });

                const contentEl = this.element.querySelector('.block-content');
                contentEl.addEventListener('keydown', (e) => {
                    if (state.isEditing && (e.key === 'Enter' && !e.shiftKey)) {
                        e.preventDefault();
                        finishEditing();
                    }
                });
                
                new ResizeObserver(() => updateArrowsForBlock(this.element)).observe(this.element);
            }

            renderContent() {
                const contentEl = this.element.querySelector('.block-content');
                contentEl.innerHTML = '';
                if (!this.contentModel || this.contentModel.length === 0) {
                    contentEl.innerHTML = '<br>';
                    return;
                }
                this.contentModel.forEach(span => {
                    if (span.isHTML) {
                        contentEl.insertAdjacentHTML('beforeend', span.text);
                        return;
                    }
                    const spanEl = document.createElement('span');
                    spanEl.textContent = span.text;
                    
                    Object.entries(span.style).forEach(([key, value]) => {
                        if (value) {
                             spanEl.style[key] = value;
                        }
                    });
                    contentEl.appendChild(spanEl);
                });

                if (contentEl.querySelector('iframe')) {
                    contentEl.classList.add('has-iframe');
                }
            }

            updateNameDisplay() {
                const nameEl = this.element.querySelector('.block-name');
                const isDefaultName = (this.name.startsWith('Bloco ') && !isNaN(parseInt(this.name.split(' ')[1]))) || this.name.endsWith(' (cópia)');

                if (isDefaultName) {
                    nameEl.style.display = 'none';
                } else {
                    nameEl.style.display = '';
                    nameEl.textContent = this.name;
                    const bgColor = getComputedStyle(this.element).backgroundColor;
                    const rgb = bgColor.match(/\d+/g);
                    if (rgb) {
                        const brightness = (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) / 1000;
                        nameEl.style.color = brightness < 128 ? 'rgba(255, 255, 255, 0.9)' : 'rgba(0, 0, 0, 0.7)';
                    }
                }
            }

            serialize() {
                return {
                    id: this.id,
                    name: this.name,
                    contentModel: this.contentModel,
                    x: parseInt(this.element.style.left),
                    y: parseInt(this.element.style.top),
                    width: this.element.style.width,
                    height: this.element.style.height,
                    bgColor: this.bgColor,
                    borderColor: this.borderColor,
                    zIndex: this.zIndex,
                    handleColor: this.handleColor,
                    handleDisplay: this.handleDisplay,
                    familyId: this.familyId,
                    showInList: this.showInList
                };
            }
        }

        class Arrow {
            constructor(config) {
                this.startBlockId = config.startBlock;
                this.endBlockId = config.endBlock;
                this.color = config.color || '#3498db';
                this.width = config.width || 3;
                this.isBidirectional = config.bidirectional || false;

                this.element = this.createElement();
                this.element.arrowInstance = this;

                svgCanvas.appendChild(this.element);
                this.update();
            }

            createElement() {
                const arrowGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                arrowGroup.classList.add('arrow-group');
                arrowGroup.dataset.startBlock = this.startBlockId;
                arrowGroup.dataset.endBlock = this.endBlockId;

                const arrowLine = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                arrowLine.classList.add('arrow-line');

                const hitbox = document.createElementNS('http://www.w3.org/2000/svg', 'line');
                hitbox.classList.add('arrow-hitbox');

                arrowGroup.appendChild(arrowLine);
                arrowGroup.appendChild(hitbox);
                return arrowGroup;
            }

            update() {
                const startBlock = document.getElementById(this.startBlockId);
                const endBlock = document.getElementById(this.endBlockId);
                if (!startBlock || !endBlock) { this.destroy(); return; }

                const arrowLine = this.element.querySelector('.arrow-line');
                const hitbox = this.element.querySelector('.arrow-hitbox');
                
                const startPoint = getClosestConnectionPoint(startBlock, endBlock);
                const endPoint = getClosestConnectionPoint(endBlock, startBlock);

                [arrowLine, hitbox].forEach(el => {
                    el.setAttribute('x1', startPoint.x); 
                    el.setAttribute('y1', startPoint.y);
                    el.setAttribute('x2', endPoint.x); 
                    el.setAttribute('y2', endPoint.y);
                });

                arrowLine.setAttribute('stroke', this.color);
                arrowLine.setAttribute('stroke-width', this.width);
                this.element.dataset.bidirectional = this.isBidirectional;

                const headSize = Number(this.width) * 3 + 5;
                
                const endMarkerId = `arrowhead-end-${this.startBlockId}-${this.endBlockId}`;
                createOrUpdateMarker(endMarkerId, this.color, headSize).setAttribute('orient', 'auto');
                arrowLine.setAttribute('marker-end', `url(#${endMarkerId})`);

                const startMarkerId = `arrowhead-start-${this.startBlockId}-${this.endBlockId}`;
                if (this.isBidirectional) {
                    createOrUpdateMarker(startMarkerId, this.color, headSize).setAttribute('orient', 'auto-start-reverse');
                    arrowLine.setAttribute('marker-start', `url(#${startMarkerId})`);
                } else {
                    arrowLine.removeAttribute('marker-start');
                    document.getElementById(startMarkerId)?.remove();
                }
            }

            setBidirectional(isBidi) {
                this.isBidirectional = isBidi;
                this.update();
            }

            destroy() {
                document.getElementById(`arrowhead-end-${this.startBlockId}-${this.endBlockId}`)?.remove();
                document.getElementById(`arrowhead-start-${this.startBlockId}-${this.endBlockId}`)?.remove();
                this.element.remove();
            }

            serialize() { return { startBlock: this.startBlockId, endBlock: this.endBlockId, color: this.color, width: this.width, bidirectional: this.isBidirectional }; }
        }

        // --- Listeners de Eventos Principais ---
        addContentBtn.addEventListener('click', (e) => {
            e.stopPropagation(); 
            const rect = addContentBtn.getBoundingClientRect();
            showContextMenu(rect.left - 5, rect.top, false, 'add');
        });
        toggleArrowModeBtn.addEventListener('click', toggleArrowMode);
        toggleSnapBtn.addEventListener('click', () => {
            state.isSnapEnabled = !state.isSnapEnabled;
            toggleSnapBtn.classList.toggle('active', state.isSnapEnabled);
            showToast(state.isSnapEnabled ? currentLangStrings.toast_snap_on : currentLangStrings.toast_snap_off);
        });
        saveBtn.addEventListener('click', saveAllPages);
        loadBtn.addEventListener('click', () => fileLoader.click());
        fileLoader.addEventListener('change', (e) => { loadAllPages(e); });
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('keydown', handleKeyDown, true);
        document.addEventListener('keyup', handleKeyUp);
        document.addEventListener('mousedown', handleGlobalMouseDown, true);
        container.addEventListener('mousedown', handleGridMouseDown);
        container.addEventListener('contextmenu', handleGridContextMenu);
        container.addEventListener('wheel', handleZoom, { passive: false });
        container.addEventListener('mousemove', (e) => {
            if (!state.isDragging && !state.isResizing && !state.isPanning) {
                updateCoordinates(e);
            }
        });
        document.addEventListener('click', () => contextMenu.style.display = 'none');
        contextMenu.addEventListener('click', (e) => e.stopPropagation()); // Prevent menu from closing on item click
        svgCanvas.addEventListener('click', handleArrowClick);
        coordsDisplay.addEventListener('click', editCoordinates);

        pageTitleEl.addEventListener('click', () => {
            pageTitleEl.contentEditable = true;
            pageTitleEl.focus();
            document.execCommand('selectAll', false, null);
        });

        pageTitleEl.addEventListener('blur', () => {
            pageTitleEl.contentEditable = false;
            const newTitle = pageTitleEl.textContent.trim();
            if (newTitle && newTitle !== state.pages[state.currentPageIndex].title) {
                state.pages[state.currentPageIndex].title = newTitle;
                updatePagesList();
                recordState();
            } else {
                pageTitleEl.textContent = state.pages[state.currentPageIndex].title;
            }
        });

        pageTitleEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                pageTitleEl.blur();
            }
        });

        prevPageBtn.addEventListener('click', goToPrevPage);

        projectTitleEl.addEventListener('click', () => {
            if (projectTitleEl.contentEditable === 'true') return;
            projectTitleEl.contentEditable = "true";
            projectTitleEl.focus();
            document.execCommand('selectAll', false, null);
        });

        projectTitleEl.addEventListener('blur', () => {
            projectTitleEl.contentEditable = false;
            const newTitle = projectTitleEl.textContent.trim();
            if (newTitle === '') {
                projectTitleEl.textContent = state.projectTitle; // Restore old title if empty
            } else if (newTitle !== state.projectTitle) {
                state.projectTitle = newTitle;
                document.title = `${state.projectTitle} - MapMent`;
                recordState();
            }
        });

        projectTitleEl.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                projectTitleEl.blur();
            }
        });
        nextPageBtn.addEventListener('click', goToNextPage);
        addPageBtn.addEventListener('click', addNewPage);
        deletePageBtn.addEventListener('click', deleteCurrentPage);
        
        renameBlockBtn.addEventListener('click', confirmRenameBlock);
        renameBlockInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                confirmRenameBlock();
            }
        });
        
        // --- Family Listeners ---
        addFamilyBtn.addEventListener('click', addNewFamily);
        newFamilyNameInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                addNewFamily();
            }
        });
        familySelect.addEventListener('change', assignFamilyToSelection);
        toggleParentMoveBtn.addEventListener('click', toggleParentMove);
        showInListCheckbox.addEventListener('change', toggleShowInList);


        document.addEventListener('selectionchange', () => {
            if (state.isEditing) {
                updateTextControlsOnSelectionChange();
            }
        });
        
        function showToast(message, duration = 3000) {
            const toast = document.createElement('div');
            toast.className = 'toast-notification';
            toast.textContent = message;
            document.body.appendChild(toast);
            setTimeout(() => toast.classList.add('show'), 10);
            setTimeout(() => {
                toast.classList.remove('show');
                toast.addEventListener('transitionend', () => toast.remove());
            }, duration);
        }

        function screenToGridCoords(screenX, screenY) {
            const gridRect = grid.getBoundingClientRect();
            return {
                x: (screenX - gridRect.left) / state.scale,
                y: (screenY - gridRect.top) / state.scale,
            };
        }
        
        function updateGridTransform() {
            grid.style.transform = `translate(${state.gridX}px, ${state.gridY}px) scale(${state.scale})`;
        }

        function updateSelection(item, shiftKey, fromSidebar = false) {
             if (!shiftKey) {
                deselectAll();
            }
            const index = state.selection.indexOf(item);
            if (index > -1) {
                if (shiftKey) {
                    item.classList.remove('selected');
                    state.selection.splice(index, 1);
                    if (state.lastSelectedItem === item) {
                        state.lastSelectedItem = state.selection.length > 0 ? state.selection[state.selection.length - 1] : null;
                    }
                }
            } else {
                item.classList.add('selected');
                state.selection.push(item);
                state.lastSelectedItem = item;
            }

            if (!fromSidebar && item.classList.contains('block')) {
                 const listItems = blocksList.querySelectorAll('li');
                 listItems.forEach(li => li.classList.remove('selected'));
                 const correspondingLi = blocksList.querySelector(`[data-block-id="${item.id}"]`);
                 if(correspondingLi) correspondingLi.classList.add('selected');
            }
            
            updateUIState();
        }

        function deselectAll() {
            state.selection.forEach(item => item.classList.remove('selected'));
            state.selection = [];
            state.lastSelectedItem = null;
            blocksList.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
            updateUIState();
        }

        function updateUIState() {
            const selectedBlockIds = new Set(state.selection.filter(item => item.classList.contains('block')).map(block => block.id));
            if (selectedBlockIds.size >= 2) {
                svgCanvas.querySelectorAll('.arrow-group').forEach(arrow => {
                    const startId = arrow.dataset.startBlock;
                    const endId = arrow.dataset.endBlock;
                    if (selectedBlockIds.has(startId) && selectedBlockIds.has(endId)) {
                        if (!state.selection.includes(arrow)) {
                            state.selection.push(arrow);
                            arrow.classList.add('selected');
                        }
                    }
                });
            }
            updateCoordinates();
            updateCustomizePanel();
            updateBlocksList();
        }

        function addNewBlock(options = {}) {
            let coords;
            if (state.contextMenuX && state.contextMenuY) {
                coords = screenToGridCoords(state.contextMenuX, state.contextMenuY);
            } else {
                coords = screenToGridCoords((window.innerWidth - 300) / 2, window.innerHeight / 2);
            }
            
            const isEmbed = options.contentModel && options.contentModel[0].isHTML;

            let config = {
                x: coords.x,
                y: coords.y,
                contentModel: options.contentModel || [{ text: 'Novo Bloco.', style: {} }],
                name: `Bloco ${state.blockCounter}`,
                zIndex: findHighestZIndex() + 1,
                showInList: false
            };
            Object.assign(config, options);

            const blockInstance = new Block(config);
            const newBlock = blockInstance.element;
            updateSelection(newBlock, false); // selection array stores DOM elements
            
            if (!isEmbed) {
                startEditing(newBlock);
                const contentEl = newBlock.querySelector('.block-content');
                const range = document.createRange();
                range.selectNodeContents(contentEl);
                const sel = window.getSelection();
                sel.removeAllRanges();
                sel.addRange(range);
            }
            recordState();
            updateBlocksList();
        }
        
        function handleBlockMouseDown(e, block) {
            block.classList.add('is-held-down');
            if (e.target.tagName === 'IFRAME' || e.target.tagName === 'VIDEO' || e.target.tagName === 'IMG') {
                return;
            }
            
            if (e.button === 2) return;

            e.stopPropagation();
            state.mouseDownTarget = e.target;
            state.startX = e.clientX;
            state.startY = e.clientY;
            state.mouseMoved = false;

            const contentEl = block.querySelector('.block-content');
            if (state.isEditing && contentEl.contains(e.target)) {
                return;
            }
            
            const handle = e.target.closest('.resize-handle');
            if (handle) {
                state.isResizing = true;
                state.resizeDirection = handle.className.match(/handle-([a-z]{1,2})/)[1];
                state.currentBlock = block;
                document.body.style.cursor = getComputedStyle(handle).cursor;

                state.resizeInitialRect = {
                    width: block.offsetWidth,
                    height: block.offsetHeight,
                    left: block.offsetLeft,
                    top: block.offsetTop,
                };

                state.resizeInitialStates = [];
                if (state.isParentMoveEnabled && state.currentBlock.dataset.familyId) {
                    const familyId = state.currentBlock.dataset.familyId;
                    state.pages.forEach((page, pageIndex) => {
                        page.blocks.forEach(blockData => {
                            if (blockData.familyId === familyId) {
                                const el = pageIndex === state.currentPageIndex ? document.getElementById(blockData.id) : null;
                                state.resizeInitialStates.push({
                                    el: el, id: blockData.id, pageIndex: pageIndex, x: blockData.x, y: blockData.y,
                                    width: parseFloat(blockData.width), height: parseFloat(blockData.height) || (el ? el.offsetHeight : 100)
                                });
                            }
                        });
                    });
                } else {
                    state.resizeInitialStates.push({
                        el: state.currentBlock, id: state.currentBlock.id, pageIndex: state.currentPageIndex, x: state.currentBlock.offsetLeft,
                        y: state.currentBlock.offsetTop, width: state.currentBlock.offsetWidth, height: state.currentBlock.offsetHeight
                    });
                }
                return;
            }

            if (state.isArrowMode || state.ctrlPressed) {
                state.isDrawingArrow = true;
                state.arrowStartBlock = block;
                startArrow(e, block);
                return;
            }
            
            state.currentBlock = block;
        }

        function handleMouseMove(e) {
            state.lastMouseX = e.clientX;
            state.lastMouseY = e.clientY;

            if (!state.mouseMoved && (state.isDrawingArrow || state.currentBlock || state.isMarqueeSelecting)) {
                const dist = Math.hypot(e.clientX - state.startX, e.clientY - state.startY);
                if (dist > 3) state.mouseMoved = true;
            }

            if (state.currentBlock && !state.isDragging && !state.isResizing && !state.isPanning && !state.isDrawingArrow && state.mouseMoved) {
                state.isDragging = true;
                document.body.style.cursor = 'grabbing';
                
                state.dragInitialPositions = [];
                if (state.isParentMoveEnabled && state.currentBlock.dataset.familyId) {
                    const familyId = state.currentBlock.dataset.familyId;
                    state.pages.forEach((page, pageIndex) => {
                        page.blocks.forEach(blockData => {
                            if (blockData.familyId === familyId) {
                                const el = pageIndex === state.currentPageIndex ? document.getElementById(blockData.id) : null;
                                state.dragInitialPositions.push({
                                    el: el, id: blockData.id, pageIndex: pageIndex, x: blockData.x, y: blockData.y
                                });
                                if (el) { el.style.transition = 'none'; el.classList.add('dragging'); }
                            }
                        });
                    });
                } else {
                    if (!state.selection.includes(state.currentBlock)) {
                        updateSelection(state.currentBlock, e.shiftKey);
                    }
                    const blocksToDrag = state.selection.filter(item => item.classList.contains('block'));
                    state.dragInitialPositions = blocksToDrag.map(item => ({
                        el: item, id: item.id, pageIndex: state.currentPageIndex, x: parseInt(item.style.left), y: parseInt(item.style.top)
                    }));
                    state.dragInitialPositions.forEach(pos => {
                        pos.el.style.transition = 'none';
                        pos.el.classList.add('dragging');
                    });
                }
            }

            if (state.isResizing) resizeBlock(e);
            else if (state.isDragging) dragBlock(e);
            else if (state.isPanning) panGrid(e);
            else if (state.isDrawingArrow) drawArrow(e);
            else if (state.isMarqueeSelecting) {
                state.marqueeHasMoved = true;
                updateMarquee(e);
            }
        }

        function handleMouseUp(e) {
            if (!state.mouseMoved) {
                if (state.currentBlock) {
                    if (e.shiftKey) {
                        updateSelection(state.currentBlock, true);
                    } else {
                        if (state.mouseDownTarget && state.mouseDownTarget.closest('.block-content') && !state.currentBlock.querySelector('iframe, video, img')) {
                            startEditing(state.currentBlock);
                        } else {
                            if (!(state.selection.length === 1 && state.selection[0] === state.currentBlock)) {
                               updateSelection(state.currentBlock, false);
                            }
                        }
                    }
                } else if (state.isMarqueeSelecting && !state.marqueeHasMoved) {
                    deselectAll();
                }
            }
            
            const wasDraggingOrResizing = state.isDragging || state.isResizing;

            if (state.isDrawingArrow) endArrow(e);

            if (state.isMarqueeSelecting && state.marqueeHasMoved) {
                finalizeMarqueeSelection();
            }
            
            if (state.isDragging) {
                document.body.style.cursor = 'default';
                state.dragInitialPositions.forEach(pos => {
                    if (pos.el) {
                        pos.el.style.transition = '';
                        pos.el.classList.remove('dragging');
                    }
                });
                state.dragInitialPositions = [];
            }

            if (state.isResizing) {
                document.body.style.cursor = 'default';
                state.resizeInitialRect = null;
                state.resizeInitialStates = [];
            }
            if (state.isPanning) {
                document.body.style.cursor = 'default';
            }
            
            if (state.isMarqueeSelecting) {
                state.isMarqueeSelecting = false;
                if(state.marqueeBox) state.marqueeBox.remove();
                state.marqueeBox = null;
            }

            state.isDragging = false; state.isResizing = false; state.isPanning = false; state.isDrawingArrow = false;
            state.arrowStartBlock = null; state.currentBlock = null; state.mouseDownTarget = null;

            if(wasDraggingOrResizing) {
                recordState();
            }

            document.querySelectorAll('.is-held-down').forEach(b => b.classList.remove('is-held-down'));
        }

        function handleGlobalMouseDown(e) {
            if (!contextMenu.contains(e.target)) {
                 contextMenu.style.display = 'none';
            }
            if (document.getElementById('custom-color-picker') && !document.getElementById('custom-color-picker').classList.contains('hidden')) {
                if (!e.target.closest('#custom-color-picker') && !e.target.closest('.color-picker-wrapper')) {
                    colorPicker.hide();
                }
            }
            if (state.isEditing && state.activeEditingElement) {
                const currentBlockEl = state.activeEditingElement.closest('.block');
                if (!currentBlockEl.contains(e.target) && !e.target.closest('.sidebar') && !e.target.closest('#custom-color-picker')) {
                    finishEditing();
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        }

        function handleGridMouseDown(e) {
            state.mouseDownTarget = e.target;
            state.startX = e.clientX;
            state.startY = e.clientY;
            state.mouseMoved = false;
            const isGridElement = e.target === grid || e.target === svgCanvas || e.target === container;
            if (isGridElement) {
                if (e.shiftKey || e.button === 1) {
                    state.isPanning = true;
                    document.body.style.cursor = 'grabbing';
                    e.preventDefault(); 
                } else if (e.button === 0) {
                    state.isMarqueeSelecting = true;
                    state.marqueeHasMoved = false;
                    state.marqueeBox = document.createElement('div');
                    state.marqueeBox.className = 'marquee-box';
                    document.body.appendChild(state.marqueeBox);
                    state.marqueeStartX = e.clientX;
                    state.marqueeStartY = e.clientY;
                    state.marqueeBox.style.left = `${e.clientX}px`;
                    state.marqueeBox.style.top = `${e.clientY}px`;
                }
            }
        }

        function handleGridContextMenu(e) {
            e.preventDefault();
            deselectAll();
            showContextMenu(e.clientX, e.clientY, false);
        }

        function getAddSubMenuHTML() {
            return `
                <li class="menu-header" data-translate-key="menu_add">Adicionar</li>
                <li data-action="add-text" data-translate-key="menu_add_text">Bloco de Texto</li>
                <li class="has-submenu">
                    <span data-translate-key="menu_from_file">Do Arquivo ></span>
                    <ul class="submenu">
                        <li data-action="add-media-file" data-translate-key="menu_add_media">Imagem / Vídeo</li>
                        <li data-action="import-pdf-file" data-translate-key="menu_add_pdf">PDF como Slides</li>
                    </ul>
                </li>
                <li class="has-submenu">
                    <span data-translate-key="menu_from_link">Do Link ></span>
                    <ul class="submenu">
                        <li data-action="add-media-link" data-translate-key="menu_add_media">Imagem / Vídeo</li>
                        <li data-action="add-pdf-link" data-translate-key="menu_add_pdf">PDF como Slides</li>
                        <li data-action="add-desmos-link">Desmos</li>
                        <li data-action="add-geogebra-link">GeoGebra</li>
                        <li data-action="add-phet-link" data-translate-key="menu_add_phet">PhET Colorado</li>
                        <li data-action="add-generic-site" data-translate-key="menu_add_generic_site">Site Genérico</li>
                    </ul>
                </li>
            `;
        }


        function showContextMenu(x, y, isBlockMenu, contentType = 'full') {
            state.contextMenuX = x;
            state.contextMenuY = y;

            let menuHTML = '<ul>';

            if (contentType === 'add') {
                menuHTML += getAddSubMenuHTML();
            } else {
                 if (isBlockMenu) {
                    menuHTML += `
                        <li class="has-submenu">
                            <span data-translate-key="menu_move_to">Mover Para ></span>
                            <ul class="submenu">
                                <li data-action="move-prev-slide" data-translate-key="menu_move_prev">Slide anterior</li>
                                <li data-action="move-next-slide" data-translate-key="menu_move_next">Próximo slide</li>
                                <li>
                                    <div class="submenu-input-group">
                                        <span data-translate-key="menu_move_specific">Slide nº:</span>
                                        <input type="number" id="move-slide-input" min="1" />
                                        <button id="move-slide-confirm">✓</button>
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li data-action="rename-block" data-translate-key="menu_rename">Renomear (F2 / R)</li>
                        <li class="separator"></li>
                    `;
                }

                menuHTML += `
                    <li class="has-submenu">
                        <span data-translate-key="menu_add">Adicionar ></span>
                        <ul class="submenu">
                            ${getAddSubMenuHTML()}
                        </ul>
                    </li>
                `;
            }

            menuHTML += '</ul>';
            contextMenu.innerHTML = menuHTML;
            setLanguage(document.documentElement.lang);

            contextMenu.style.visibility = 'hidden';
            contextMenu.style.display = 'block';
            
            const menuRect = contextMenu.getBoundingClientRect();
            let finalX = x + 5;
            let finalY = y + 5;

            if (finalX + menuRect.width > window.innerWidth) {
                finalX = x - menuRect.width - 5;
            }
             if (finalY + menuRect.height > window.innerHeight) {
                finalY = y - menuRect.height - 5;
            }

            contextMenu.style.left = `${Math.max(0, finalX)}px`;
            contextMenu.style.top = `${Math.max(0, finalY)}px`;
            contextMenu.style.visibility = 'visible';

            // Adicionar listeners dinamicamente
            contextMenu.querySelectorAll('[data-action]').forEach(item => {
                item.addEventListener('click', handleContextMenuClick);
            });
            
            const moveInput = document.getElementById('move-slide-input');
            const moveConfirm = document.getElementById('move-slide-confirm');

            if(moveInput && moveConfirm) {
                 moveConfirm.addEventListener('click', () => {
                    const pageNum = parseInt(moveInput.value);
                    moveSelectionToPage(pageNum);
                });
                moveInput.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter') {
                        e.preventDefault();
                        const pageNum = parseInt(moveInput.value);
                        moveSelectionToPage(pageNum);
                    }
                });
            }
        }

        function handleContextMenuClick(e) {
            e.stopPropagation();
            const target = e.currentTarget;
            const action = target.dataset.action;
            if (!action) return;
            
            const actionMap = {
                // Ações de Mover
                'move-prev-slide': () => moveSelectionToPage(state.currentPageIndex), // 0-indexed
                'move-next-slide': () => moveSelectionToPage(state.currentPageIndex + 2), // 0-indexed
                'rename-block': startRenamingBlock,

                // Ações de Adicionar
                'add-text': () => { 
                    state.lastBlockCreationAction = () => addNewBlock({ contentModel: [{ text: 'Novo Bloco de Texto', style: {} }] });
                    state.lastBlockCreationAction();
                },
                'add-media-file': () => {
                    const fileInput = document.createElement('input');
                    fileInput.type = 'file';
                    fileInput.accept = 'image/*,video/*';
                    state.lastBlockCreationAction = () => fileInput.click();
                    fileInput.onchange = e => {
                        const file = e.target.files[0];
                        if (file) {
                            const reader = new FileReader();
                            reader.onload = res => {
                                const dataUrl = res.target.result;
                                if (file.type.startsWith('image/')) {
                                    const img = new Image();
                                    img.onload = () => {
                                        const aspectRatio = img.height / img.width;
                                        const maxWidth = 800;
                                        const newWidth = Math.min(img.width, maxWidth);
                                        const newHeight = newWidth * aspectRatio;
                                        const html = `<img src="${dataUrl}" alt="User content">`;
                                        addNewBlock({ contentModel: [{ text: html, style: {}, isHTML: true }], width: `${newWidth}px`, height: `${newHeight}px` });
                                    };
                                    img.src = dataUrl;
                                } else if (file.type.startsWith('video/')) {
                                    const video = document.createElement('video');
                                    video.onloadedmetadata = () => {
                                        const aspectRatio = video.videoHeight / video.videoWidth;
                                        const maxWidth = 800;
                                        const newWidth = Math.min(video.videoWidth, maxWidth);
                                        const newHeight = newWidth * aspectRatio;
                                        const html = `<video src="${dataUrl}" controls></video>`;
                                        addNewBlock({ contentModel: [{ text: html, style: {}, isHTML: true }], width: `${newWidth}px`, height: `${newHeight}px` });
                                    };
                                    video.src = dataUrl;
                                }
                            };
                            reader.readAsDataURL(file);
                        }
                    };
                    state.lastBlockCreationAction();
                },
                 'import-pdf-file': () => {
                    const fileInput = document.createElement('input');
                    fileInput.type = 'file';
                    fileInput.accept = '.pdf';
                    fileInput.onchange = e => {
                        const file = e.target.files[0];
                        if (file) {
                            importPdfFromFile(file);
                        }
                    };
                    fileInput.click();
                },
                'add-media-link': () => {
                    const createMediaLinkBlock = () => {
                        const url = prompt(currentLangStrings.prompt_media_url);
                        if (!url) return;

                        let embedUrl;
                        if (url.includes('youtube.com/watch?v=')) embedUrl = `https://www.youtube.com/embed/${new URL(url).searchParams.get('v')}`;
                        else if (url.includes('youtu.be/')) embedUrl = `https://www.youtube.com/embed/${new URL(url).pathname.slice(1)}`;
                        else if (url.includes('vimeo.com/')) embedUrl = `https://player.vimeo.com/video/${new URL(url).pathname.slice(1)}`;
                        else if (url.includes('drive.google.com/file/d/')) {
                            const match = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
                            if (match && match[1]) embedUrl = `https://drive.google.com/file/d/${match[1]}/preview`;
                        }

                        if (embedUrl) {
                            addNewBlock({ contentModel: [{ text: `<iframe src="${embedUrl}" allow="autoplay; fullscreen"></iframe>`, style: {}, isHTML: true }], width: '560px', height: '315px' });
                        } else {
                            const img = new Image();
                            img.onload = () => {
                                const aspectRatio = img.height / img.width;
                                const maxWidth = 800;
                                const newWidth = Math.min(img.width, maxWidth);
                                const newHeight = newWidth * aspectRatio;
                                const html = `<img src="${url}" alt="User content">`;
                                addNewBlock({ contentModel: [{ text: html, style: {}, isHTML: true }], width: `${newWidth}px`, height: `${newHeight}px` });
                            };
                            img.onerror = () => {
                                showToast(currentLangStrings.toast_media_error);
                            };
                            img.src = url;
                        }
                    };
                    state.lastBlockCreationAction = createMediaLinkBlock;
                    state.lastBlockCreationAction();
                },
                'add-pdf-link': () => {
                    const createPdfLinkBlock = () => {
                        const url = prompt(currentLangStrings.prompt_pdf_url);
                        if (url) {
                            const name = url.substring(url.lastIndexOf('/') + 1);
                            showToast(currentLangStrings.toast_pdf_importing.replace('{name}', name), 5000);
                            fetch(url)
                                .then(response => {
                                    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                                    return response.arrayBuffer();
                                })
                                .then(arrayBuffer => processPdfData(arrayBuffer, name))
                                .catch(e => {
                                    console.error('Error fetching PDF from URL:', e);
                                    showToast(currentLangStrings.toast_pdf_error);
                                });
                        }
                    };
                    state.lastBlockCreationAction = createPdfLinkBlock;
                    state.lastBlockCreationAction();
                },
                'add-desmos-link': () => {
                    const createDesmosBlock = () => {
                        const desmosUrl = prompt(currentLangStrings.prompt_desmos_url);
                        if (desmosUrl && desmosUrl.includes('desmos.com/calculator')) addNewBlock({ contentModel: [{ text: `<iframe src="${desmosUrl}"></iframe>`, style: {}, isHTML: true }], width: '600px', height: '400px' });
                        else if (desmosUrl) showToast('Invalid Desmos URL.');
                    };
                    state.lastBlockCreationAction = createDesmosBlock;
                    state.lastBlockCreationAction();
                },
                'add-geogebra-link': () => {
                    const createGeoGebraBlock = () => {
                        const geoGebraUrl = prompt(currentLangStrings.prompt_geogebra_url);
                        if (geoGebraUrl && geoGebraUrl.includes('geogebra.org')) {
                            addNewBlock({ contentModel: [{ text: `<iframe src="${geoGebraUrl}" style="border:0px;width:100%;height:100%;" allowfullscreen></iframe>`, style: {}, isHTML: true }], width: '600px', height: '450px' });
                        } else if (geoGebraUrl) {
                            showToast('Invalid GeoGebra URL.');
                        }
                    };
                    state.lastBlockCreationAction = createGeoGebraBlock;
                    state.lastBlockCreationAction();
                },
                'add-phet-link': () => {
                    const createPhetBlock = () => {
                        const phetUrl = prompt(currentLangStrings.prompt_phet_url);
                        if (phetUrl && phetUrl.includes('phet.colorado.edu')) {
                            addNewBlock({ contentModel: [{ text: `<iframe src="${phetUrl}" style="border:0px;width:100%;height:100%;" allowfullscreen scrolling="no"></iframe>`, style: {}, isHTML: true }], width: '800px', height: '600px' });
                        } else if (phetUrl) {
                            showToast('Invalid PhET Colorado URL.');
                        }
                    };
                    state.lastBlockCreationAction = createPhetBlock;
                    state.lastBlockCreationAction();
                },
                'add-generic-site': () => {
                    const createGenericSiteBlock = () => {
                        const siteUrl = prompt(currentLangStrings.prompt_generic_site_url);
                        if (siteUrl) {
                            addNewBlock({ 
                                contentModel: [{ text: `<iframe src="${siteUrl}" style="border:0px;width:100%;height:100%;" allowfullscreen></iframe>`, style: {}, isHTML: true }], 
                                width: '800px', 
                                height: '600px' 
                            });
                        }
                    };
                    state.lastBlockCreationAction = createGenericSiteBlock;
                    createGenericSiteBlock();
                }
            };

            if(actionMap[action]) actionMap[action]();
            contextMenu.style.display = 'none';
        }
        
        function handleArrowClick(e) {
            const group = e.target.closest('.arrow-group');
            if (group) {
                e.stopPropagation();
                updateSelection(group, e.shiftKey);
            }
        }

        function handleKeyDown(e) {
            const isInputFocused = e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA' || e.target.isContentEditable;
            if (isInputFocused && e.target !== document.body) {
                return;
            }

            if (colorPicker && !colorPicker.isHidden() && e.key === 'Enter') {
                e.preventDefault();
                document.getElementById('color-picker-confirm').click();
                return;
            }
            if (colorPicker && !colorPicker.isHidden() && e.key === 'Escape') {
                e.preventDefault();
                document.getElementById('color-picker-cancel').click();
                return;
            }
            
            if (e.ctrlKey && !e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
                e.preventDefault();
                undo();
            }
            if (e.ctrlKey && e.shiftKey && (e.key === 'z' || e.key === 'Z')) {
                e.preventDefault();
                redo();
            }

            if (e.key === 'PageDown') {
                e.preventDefault();
                goToNextPage();
            }
            if (e.key === 'PageUp') {
                e.preventDefault();
                goToPrevPage();
            }

            if (e.key === 'Control') {
                state.ctrlPressed = true;
                if (!state.isArrowMode) {
                    document.body.classList.add('arrow-mode');
                }
            }
            if (e.key === 'Delete') {
                if (state.selectedPageIndices.size > 0) {
                    deleteSelectedPages();
                    return;
                }

                state.selection.forEach(item => {
                    if (item.classList.contains('block')) {
                        svgCanvas.querySelectorAll(`.arrow-group[data-start-block="${item.id}"], .arrow-group[data-end-block="${item.id}"]`).forEach(arrowEl => arrowEl.arrowInstance?.destroy()); // Use optional chaining
                        item.remove();
                    } else if (item.classList.contains('arrow-group')) {
                        item.arrowInstance?.destroy(); // Use optional chaining
                    }
                });
                deselectAll();
                recordState();
                updateBlocksList(); 
            }
            if (e.key === 'F2' || e.key.toLowerCase() === 'r') {
                e.preventDefault();
                startRenamingBlock();
            }
            if (e.key === 'b' || e.key === 'B') {
                e.preventDefault();
                showSmartColorPicker();
            }
            if(e.key === 'g' || e.key === 'G') {
                e.preventDefault();
                sidebar.classList.toggle('hidden');
                document.body.classList.toggle('sidebar-hidden');
            }
            if(e.key === 'n' || e.key === 'N') {
                e.preventDefault();
                coordsDisplay.classList.toggle('hidden');
            }
            if (e.key === 'p' || e.key === 'P') {
                e.preventDefault();
                toggleParentMove();
            }
            if (e.shiftKey && e.key === '+') {
                e.preventDefault();
                addNewPage();
            }
            if(e.shiftKey && e.key === '-') {
                e.preventDefault();
                deleteCurrentPage();
            }
            if (e.shiftKey && (e.key === 'd' || e.key === 'D')) {
                e.preventDefault();
                if (state.selection.length > 0) duplicateSelection();
                else state.lastBlockCreationAction();
            }
            if (e.shiftKey && (e.key === 'a' || e.key === 'A')) {
                e.preventDefault();
                showContextMenu(state.lastMouseX, state.lastMouseY, false, 'add');
            }
            if (e.ctrlKey && (e.key === 's' || e.key === 'S')) { e.preventDefault(); saveAllPages(); }
            if (e.ctrlKey && (e.key === 'l' || e.key === 'L')) { e.preventDefault(); fileLoader.click(); }
            if (e.key === 'h' || e.key === 'H') { e.preventDefault(); shortcutHint.style.display = shortcutHint.style.display === 'none' ? 'block' : 'none'; }
        }

        function handleKeyUp(e) {
            if (e.key === 'Control') {
                state.ctrlPressed = false;
                if (!toggleArrowModeBtn.classList.contains('active')) {
                     document.body.classList.remove('arrow-mode');
                }
            }
        }
        
        function handleDynamicTextUpdate() {
            if (!state.isEditing || !state.activeEditingElement) return;
            const block = state.activeEditingElement.closest('.block');
            block.contentModel = parseContent(state.activeEditingElement);
            state.activeContentModel = JSON.parse(JSON.stringify(block.contentModel));
        }

        function startEditing(block) {
            const contentEl = block.querySelector('.block-content');
            if (contentEl.querySelector('iframe, video, img')) return;
            
            if (state.selection.length !== 1 || state.selection[0] !== block) {
                updateSelection(block, false);
            }

            sidebar.classList.remove('hidden');
            document.body.classList.remove('sidebar-hidden');
            state.isEditing = true;
            state.activeEditingElement = contentEl;
            state.activeContentModel = JSON.parse(JSON.stringify(block.contentModel)); 

            contentEl.contentEditable = true;
            contentEl.addEventListener('input', handleDynamicTextUpdate); 
            contentEl.focus();
            updateCustomizePanel();
        }

        function finishEditing() {
            if (!state.isEditing || !state.activeEditingElement) return;
            const block = state.activeEditingElement.closest('.block');
            
            state.activeEditingElement.removeEventListener('input', handleDynamicTextUpdate); 
            
            block.contentModel = parseContent(state.activeEditingElement);

            state.isEditing = false;
            state.activeEditingElement.contentEditable = false;
            state.activeEditingElement = null;
            state.activeContentModel = [];

            updateArrowsForBlock(block);
            recordState();
        }
        
        function resizeBlock(e) {
            if (!state.isResizing || !state.currentBlock || state.resizeInitialStates.length === 0) return;

            const dx = (e.clientX - state.startX) / state.scale;
            const dy = (e.clientY - state.startY) / state.scale;
            const gridSize = 30;
            const primaryState = state.resizeInitialStates.find(s => s.id === state.currentBlock.id);
            if (!primaryState) return;

            let dw = 0, dh = 0, dLeft = 0, dTop = 0;

            if (state.resizeDirection.includes('e')) dw = dx;
            if (state.resizeDirection.includes('w')) { dw = -dx; dLeft = dx; }
            if (state.resizeDirection.includes('s')) dh = dy;
            if (state.resizeDirection.includes('n')) { dh = -dy; dTop = dy; }

            let newWidth = primaryState.width + dw;
            let newHeight = primaryState.height + dh;
            let newLeft = primaryState.x + dLeft;
            let newTop = primaryState.y + dTop;

            if (state.isSnapEnabled) {
                if (state.resizeDirection.includes('e')) {
                    const newRight = primaryState.x + newWidth;
                    newWidth = (Math.round(newRight / gridSize) * gridSize) - primaryState.x;
                }
                if (state.resizeDirection.includes('w')) {
                    const snappedLeft = Math.round(newLeft / gridSize) * gridSize;
                    newWidth += (newLeft - snappedLeft);
                    newLeft = snappedLeft;
                }
                if (state.resizeDirection.includes('s')) {
                    const newBottom = primaryState.y + newHeight;
                    newHeight = (Math.round(newBottom / gridSize) * gridSize) - primaryState.y;
                }
                if (state.resizeDirection.includes('n')) {
                    const snappedTop = Math.round(newTop / gridSize) * gridSize;
                    newHeight += (newTop - snappedTop);
                    newTop = snappedTop;
                }
            }
            
            const finalDw = newWidth - primaryState.width;
            const finalDh = newHeight - primaryState.height;
            const finalDLeft = newLeft - primaryState.x;
            const finalDTop = newTop - primaryState.y;
            const minSize = 50;

            state.resizeInitialStates.forEach(s => {
                let memberNewWidth = s.width + finalDw;
                let memberNewHeight = s.height + finalDh;
                let memberNewLeft = s.x + finalDLeft;
                let memberNewTop = s.y + finalDTop;

                if (s.el) {
                    if (memberNewWidth >= minSize) {
                        s.el.style.width = `${memberNewWidth}px`;
                        s.el.style.left = `${memberNewLeft}px`;
                    }
                    if (memberNewHeight >= minSize) {
                        s.el.style.height = `${memberNewHeight}px`;
                        s.el.style.top = `${memberNewTop}px`;
                    }
                    updateArrowsForBlock(s.el);
                }

                const blockData = state.pages[s.pageIndex].blocks.find(b => b.id === s.id);
                if (blockData) {
                    if (memberNewWidth >= minSize) {
                        blockData.width = `${memberNewWidth}px`;
                        blockData.x = memberNewLeft;
                    }
                    if (memberNewHeight >= minSize) {
                        blockData.height = `${memberNewHeight}px`;
                        blockData.y = memberNewTop;
                    }
                }
            });
        }

        function dragBlock(e) {
            const dx = (e.clientX - state.startX) / state.scale;
            const dy = (e.clientY - state.startY) / state.scale;
            const gridSize = 30;

            state.dragInitialPositions.forEach(pos => {
                const newX = pos.x + dx;
                const newY = pos.y + dy;
                
                let finalX, finalY;
                if (state.isSnapEnabled) {
                    finalX = Math.max(0, Math.round(newX / gridSize) * gridSize);
                    finalY = Math.max(0, Math.round(newY / gridSize) * gridSize);
                } else {
                    finalX = Math.max(0, newX);
                    finalY = Math.max(0, newY);
                }

                // Update the DOM element if it's on the current page
                if (pos.el) {
                    pos.el.style.left = `${finalX}px`;
                    pos.el.style.top = `${finalY}px`;
                    updateArrowsForBlock(pos.el);
                }
                
                // Update the data model for all blocks in the drag group,
                // regardless of which page they are on.
                const blockData = state.pages[pos.pageIndex].blocks.find(b => b.id === pos.id);
                if (blockData) {
                    blockData.x = finalX;
                    blockData.y = finalY;
                }
            });

            updateCoordinates();
        }
        
        function panGrid(e) {
            state.gridX = Math.min(0, state.gridX + e.movementX);
            state.gridY = Math.min(0, state.gridY + e.movementY);
            updateGridTransform();
        }

        function handleZoom(e) {
            if (e.target.closest('.sidebar')) return;
            e.preventDefault();
            const scaleAmount = 0.05;
            let mousePoint = screenToGridCoords(e.clientX, e.clientY);
            
            if (state.gridX === 0) mousePoint.x = 0;
            if (state.gridY === 0) mousePoint.y = 0;
            
            const oldScale = state.scale;
            if (e.deltaY < 0) state.scale += scaleAmount;
            else state.scale -= scaleAmount;
            
            state.scale = Math.max(0.1, Math.min(state.scale, 3));

            state.gridX += mousePoint.x * (oldScale - state.scale);
            state.gridY += mousePoint.y * (oldScale - state.scale);
            
            state.gridX = Math.min(0, state.gridX);
            state.gridY = Math.min(0, state.gridY);

            updateGridTransform();
            updateCoordinates(e);
        }

        function toggleArrowMode() {
            state.isArrowMode = !state.isArrowMode;
            document.body.classList.toggle('arrow-mode', state.isArrowMode);
            toggleArrowModeBtn.classList.toggle('active', state.isArrowMode);
        }

        function startArrow(e, block) {
            document.body.classList.add('is-drawing-arrow');
            const startPoint = getBlockCenter(block);
            const tempGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            state.tempArrow = document.createElementNS('http://www.w3.org/2000/svg', 'line');
            state.tempArrow.setAttribute('x1', startPoint.x); 
            state.tempArrow.setAttribute('y1', startPoint.y);
            state.tempArrow.setAttribute('x2', startPoint.x); 
            state.tempArrow.setAttribute('y2', startPoint.y);
            state.tempArrow.setAttribute('stroke', '#3498db'); 
            state.tempArrow.setAttribute('stroke-width', '3');

            const marker = createOrUpdateMarker('temp-arrowhead', '#3498db', 10);
            marker.setAttribute('orient', 'auto');
            state.tempArrow.setAttribute('marker-end', 'url(#temp-arrowhead)');

            tempGroup.appendChild(state.tempArrow);
            svgCanvas.appendChild(tempGroup);
        }

        function drawArrow(e) {
            if (!state.tempArrow) return;
            const coords = screenToGridCoords(e.clientX, e.clientY);
            state.tempArrow.setAttribute('x2', coords.x);
            state.tempArrow.setAttribute('y2', coords.y);
        }
        
        function endArrow(e) {
            const tempGroup = state.tempArrow.parentElement;
            if (!state.mouseMoved) {
                tempGroup?.remove();
                document.getElementById('temp-arrowhead')?.remove();
                state.tempArrow = null;
                document.body.classList.remove('is-drawing-arrow');
                return;
            }

            const elementUnderCursor = document.elementFromPoint(e.clientX, e.clientY);
            const endBlock = elementUnderCursor ? elementUnderCursor.closest('.block') : null;

            const reverseArrow = endBlock ? svgCanvas.querySelector(`.arrow-group[data-start-block="${endBlock.id}"][data-end-block="${state.arrowStartBlock.id}"]`) : null;

            if (reverseArrow) {
                const arrowInstance = reverseArrow.arrowInstance;
                if (arrowInstance) {
                    arrowInstance.setBidirectional(true);
                } else { // Fallback for safety, though with the class structure this is less likely
                    reverseArrow.dataset.bidirectional = 'true';
                    updateArrowsForBlock(document.getElementById(reverseArrow.dataset.startBlock));
                }
                tempGroup?.remove();
                recordState();

            } else if (endBlock && endBlock !== state.arrowStartBlock) {
                const arrowExists = svgCanvas.querySelector(`.arrow-group[data-start-block="${state.arrowStartBlock.id}"][data-end-block="${endBlock.id}"]`);
                if (arrowExists) {
                    tempGroup?.remove();
                } else {
                    const newArrowInstance = new Arrow({
                        startBlock: state.arrowStartBlock.id,
                        endBlock: endBlock.id,
                        color: state.tempArrow.getAttribute('stroke'),
                        width: state.tempArrow.getAttribute('stroke-width')
                    });
                    tempGroup?.remove();
                    if (state.selection.includes(state.arrowStartBlock) && state.selection.includes(endBlock)) {
                        updateSelection(newArrowInstance.element, true);
                    }
                    recordState();
                }
            } else { 
                tempGroup?.remove(); 
            }
            
            document.getElementById('temp-arrowhead')?.remove();
            state.tempArrow = null;
            document.body.classList.remove('is-drawing-arrow');
        }
        
        function updateMarquee(e) {
            if (!state.marqueeBox) return;
            const x = Math.min(e.clientX, state.marqueeStartX);
            const y = Math.min(e.clientY, state.marqueeStartY);
            const width = Math.abs(e.clientX - state.marqueeStartX);
            const height = Math.abs(e.clientY - state.marqueeStartY);
            state.marqueeBox.style.left = `${x}px`;
            state.marqueeBox.style.top = `${y}px`;
            state.marqueeBox.style.width = `${width}px`;
            state.marqueeBox.style.height = `${height}px`;

            const marqueeRect = state.marqueeBox.getBoundingClientRect();
            document.querySelectorAll('.block').forEach(block => {
                const blockRect = block.getBoundingClientRect();
                const isIntersecting = !(marqueeRect.right < blockRect.left ||
                                        marqueeRect.left > blockRect.right ||
                                        marqueeRect.bottom < blockRect.top ||
                                        marqueeRect.top > blockRect.bottom);
                block.classList.toggle('pre-selected', isIntersecting);
            });
        }

        function finalizeMarqueeSelection() {
            deselectAll();
            const newlySelected = [];
            document.querySelectorAll('.block.pre-selected').forEach(block => {
                block.classList.remove('pre-selected');
                block.classList.add('selected');
                newlySelected.push(block);
            });
            state.selection = newlySelected;
            if (state.selection.length > 0) {
                state.lastSelectedItem = state.selection[state.selection.length - 1];
            }
            updateUIState();
        }

        function createOrUpdateMarker(id, color, size = 10) {
            let marker = document.getElementById(id);
            if (!marker) {
                marker = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
                marker.setAttribute('id', id);
                const polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                marker.appendChild(polygon);
                svgDefs.appendChild(marker);
            }
            const width = Number(size);
            const height = width * 0.7;
            
            marker.setAttribute('markerWidth', width);
            marker.setAttribute('markerHeight', height);
            marker.setAttribute('refX', width * 0.9);
            marker.setAttribute('refY', height / 2);
            
            const polygon = marker.querySelector('polygon');
            polygon.setAttribute('points', `0 0, ${width} ${height / 2}, 0 ${height}`);
            polygon.setAttribute('fill', color);
            return marker;
        }

        function updateArrowsForBlock(block) {
            const blockId = block.id;
            svgCanvas.querySelectorAll(`.arrow-group[data-start-block="${blockId}"], .arrow-group[data-end-block="${blockId}"]`).forEach(arrowEl => {
                arrowEl.arrowInstance?.update(); // Use optional chaining
            });
        }

        function updateCoordinates(e = null) {
            if (state.isEditingCoords) return;
            if (state.selection.length > 1) {
                coordsDisplay.innerHTML = `${state.selection.length} ${currentLangStrings.coords_items} | Z: ${Math.round(state.scale * 100)}%`;
            } else if (state.selection.length === 1) {
                const item = state.selection[0];
                if (item.classList.contains('block')) {
                    const x = parseInt(item.style.left);
                    const y = parseInt(item.style.top);
                    coordsDisplay.innerHTML = `X: ${x}, Y: ${y} | Z: ${Math.round(state.scale * 100)}%`;
                } else if (item.classList.contains('arrow-group')) {
                    coordsDisplay.innerHTML = `${currentLangStrings.coords_arrow} | Z: ${Math.round(state.scale * 100)}%`;
                }
            } else if (e) {
                const mouseCoords = screenToGridCoords(e.clientX, e.clientY);
                coordsDisplay.innerHTML = `X: ${Math.round(mouseCoords.x)}, Y: ${Math.round(mouseCoords.y)} | Z: ${Math.round(state.scale * 100)}%`;
            } else {
                coordsDisplay.innerHTML = `${currentLangStrings.coords_nothing} | Z: ${Math.round(state.scale * 100)}%`;
            }
        }
        
        function editCoordinates(e) {
            if (e.target.tagName === 'INPUT' || state.isEditingCoords) return;
            e.stopPropagation();

            const blockToEdit = state.lastSelectedItem?.classList.contains('block') ? state.lastSelectedItem : null;
            if (!blockToEdit) return;

            state.isEditingCoords = true;

            const x = parseInt(blockToEdit.style.left); 
            const y = parseInt(blockToEdit.style.top);
            coordsDisplay.innerHTML = `X: <input type="number" value="${x}" id="coord-x"> Y: <input type="number" value="${y}" id="coord-y">`;
            
            const inputX = document.getElementById('coord-x'); 
            const inputY = document.getElementById('coord-y');
            inputX.focus(); 
            inputX.select();

            const applyAndClose = () => {
                const newX = parseInt(inputX.value || 0);
                const newY = parseInt(inputY.value || 0);
                const gridSize = 30;
                blockToEdit.style.left = `${Math.max(0, Math.round(newX / gridSize) * gridSize)}px`;
                blockToEdit.style.top = `${Math.max(0, Math.round(newY / gridSize) * gridSize)}px`;
                
                state.isEditingCoords = false;
                updateArrowsForBlock(blockToEdit); 
                updateCoordinates();
                document.removeEventListener('click', handleClickOutside, true);
                document.removeEventListener('keydown', handleInputKeyDown, true);
                recordState();
            };

            const handleInputKeyDown = (e) => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    applyAndClose();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    state.isEditingCoords = false;
                    updateCoordinates(); 
                    document.removeEventListener('click', handleClickOutside, true);
                    document.removeEventListener('keydown', handleInputKeyDown, true);
                }
            };

            const handleClickOutside = (e) => {
                if (!coordsDisplay.contains(e.target)) {
                    applyAndClose();
                }
            };
            
            setTimeout(() => {
                document.addEventListener('click', handleClickOutside, true);
                document.addEventListener('keydown', handleInputKeyDown, true);
            }, 0);
        }

        const nonColorInputs = {
            handleVisible: document.getElementById('handle-visible'),
            textSize: document.getElementById('text-size'),
            textFont: document.getElementById('text-font'),
            linkSrc: document.getElementById('link-src'),
            arrowWidth: document.getElementById('arrow-width'),
            boldBtn: document.getElementById('bold-btn'),
            italicBtn: document.getElementById('italic-btn'),
            underlineBtn: document.getElementById('underline-btn'),
        };
        const controlGroups = {
            block: document.getElementById('block-controls'), 
            handle: document.getElementById('handle-controls'),
            text: document.getElementById('text-controls'), 
            link: document.getElementById('link-controls'),
            arrow: document.getElementById('arrow-controls'),
            grid: document.getElementById('grid-controls')
        }

        function updateCustomizePanel() {
            const hasBlock = state.selection.some(item => item.classList.contains('block'));
            const hasArrow = state.selection.some(item => item.classList.contains('arrow-group'));
            const lastSelectedBlock = state.lastSelectedItem?.classList.contains('block') ? state.lastSelectedItem : state.selection.find(i => i.classList.contains('block'));
            const hasIframe = lastSelectedBlock?.querySelector('iframe');
            
            controlGroups.block.classList.toggle('hidden', !hasBlock);
            controlGroups.handle.classList.toggle('hidden', !hasBlock);
            controlGroups.arrow.classList.toggle('hidden', !hasArrow);
            controlGroups.grid.classList.toggle('hidden', hasBlock || hasArrow);
            
            controlGroups.text.classList.toggle('hidden', !hasBlock || hasIframe);
            controlGroups.link.classList.toggle('hidden', !hasIframe);

            if (hasBlock && lastSelectedBlock) {
                const computed = getComputedStyle(lastSelectedBlock);
                document.querySelector('[data-color-target="blockBg"]').style.background = computed.backgroundColor;
                document.querySelector('[data-color-target="blockBorder"]').style.background = computed.borderColor;
                document.querySelector('[data-color-target="handle"]').style.background = computed.getPropertyValue('--handle-color').trim() || '#808080';
                
                showInListCheckbox.checked = lastSelectedBlock.dataset.showInList !== 'false';
                nonColorInputs.handleVisible.checked = computed.getPropertyValue('--handle-display').trim() !== 'none';
                
                updateFamilySelectDropdown();
                const familyId = lastSelectedBlock.dataset.familyId || 'none';
                familySelect.value = familyId;

                if (hasIframe) {
                    nonColorInputs.linkSrc.value = hasIframe.src;
                } else {
                    if (state.isEditing) updateTextControlsOnSelectionChange();
                    else { 
                        const styles = getStyleOfFirstCharacter(lastSelectedBlock.contentModel);
                        document.querySelector('[data-color-target="text"]').style.background = styles.color || '#f9fafb';
                    }
                }
            }
            if (hasArrow) {
                const arrowToSample = state.lastSelectedItem?.classList.contains('arrow-group') ? state.lastSelectedItem : state.selection.find(i => i.classList.contains('arrow-group'));
                if (arrowToSample) {
                    const arrowLine = arrowToSample.querySelector('.arrow-line');
                    const color = arrowLine.getAttribute('stroke') || '#f9fafb';
                    document.querySelector('[data-color-target="arrow"]').style.background = color;
                    nonColorInputs.arrowWidth.value = arrowLine.getAttribute('stroke-width');
                }
            }
            
            const bodyStyle = getComputedStyle(document.body);
            const gridStyle = getComputedStyle(grid);

            document.querySelector('[data-color-target="gridBg"]').style.background = bodyStyle.backgroundImage;
            const gridLineColorMatch = gridStyle.backgroundImage.match(/rgba?(\d+,\s*\d+,\s*\d+,\s*[\d.]+)/);
            document.querySelector('[data-color-target="gridLines"]').style.background = gridLineColorMatch ? `rgb(${gridLineColorMatch[1]})` : 'rgba(255,255,255,0.1)';
        }

        nonColorInputs.boldBtn.addEventListener('mousedown', e => { e.preventDefault(); applyStyleToSelection({ fontWeight: 'bold' }); });
        nonColorInputs.italicBtn.addEventListener('mousedown', e => { e.preventDefault(); applyStyleToSelection({ fontStyle: 'italic' }); });
        nonColorInputs.underlineBtn.addEventListener('mousedown', e => { e.preventDefault(); applyStyleToSelection({ textDecoration: 'underline' }); });
        nonColorInputs.textSize.addEventListener('change', e => applyStyleToSelection({ fontSize: `${e.target.value}px` }));
        nonColorInputs.textFont.addEventListener('change', e => applyStyleToSelection({ fontFamily: e.target.value }));
        
        nonColorInputs.handleVisible.addEventListener('change', e => {
            const value = e.target.checked ? 'block' : 'none';
            state.selection.forEach(i => i.classList.contains('block') && i.style.setProperty('--handle-display', value));
            recordState();
        });
        
        nonColorInputs.linkSrc.addEventListener('change', recordState);

        const updateSelectedArrows = (widthValue) => {
            state.selection.forEach(item => { 
                if (item.arrowInstance) {
                    item.arrowInstance.width = widthValue;
                    item.arrowInstance.update();
                } 
            });
        };

        nonColorInputs.arrowWidth.addEventListener('input', e => updateSelectedArrows(e.target.value));
        nonColorInputs.arrowWidth.addEventListener('change', recordState);


        function updateTextControlsOnSelectionChange() {
            if (!state.isEditing || !state.activeEditingElement) return;

            const selection = window.getSelection();
            if (selection.rangeCount === 0 || selection.isCollapsed) {
                const { index } = getSelectionIndices(state.activeEditingElement);
                const styles = getStyleAtCharacterIndex(index > 0 ? index - 1 : 0);
                updateToolbarUI(styles);
                return;
            };

            const styles = getCommonStyleInSelection();
            updateToolbarUI(styles);
        }

        function updateToolbarUI(styles) {
            if (!styles) return;
            nonColorInputs.boldBtn.classList.toggle('active', styles.fontWeight === 'bold');
            nonColorInputs.italicBtn.classList.toggle('active', styles.fontStyle === 'italic');
            nonColorInputs.underlineBtn.classList.toggle('active', styles.textDecoration === 'underline');

            const currentSize = Math.round(parseFloat(styles.fontSize)) || 15;
            let closestOption = nonColorInputs.textSize.options[0];
            for (const option of nonColorInputs.textSize.options) {
                if (Math.abs(option.value - currentSize) <= Math.abs(closestOption.value - currentSize)) {
                    closestOption = option;
                }
            }
            nonColorInputs.textSize.value = closestOption.value;

            const fontOption = Array.from(nonColorInputs.textFont.options).find(opt => (styles.fontFamily || "").includes(opt.value));
            nonColorInputs.textFont.value = fontOption ? fontOption.value : nonColorInputs.textFont.options[0].value;
            
            document.querySelector('[data-color-target="text"]').style.background = styles.color || '#f9fafb';
        }

        let colorPicker = null;
        function initializeColorPickers() {
            colorPicker = createColorPicker();
            document.querySelectorAll('.color-picker-wrapper').forEach(wrapper => {
                wrapper.addEventListener('mousedown', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const targetType = wrapper.dataset.colorTarget;
                    let initialColor = wrapper.style.backgroundColor || 'rgba(255, 255, 255, 1)';
                    const rect = wrapper.getBoundingClientRect();

                    colorPicker.show(initialColor, rect.left, rect.top, (newColor) => {
                        handleColorConfirm(targetType, newColor);
                        recordState();
                    });
                });
            });
        }
        
        function handleColorConfirm(targetType, color) {
            const actions = {
                'blockBg': () => state.selection.forEach(item => {
                    if (item.blockInstance) { // Use instance properties
                        item.blockInstance.bgColor = color;
                        item.style.backgroundColor = color; // Also update the DOM element directly
                        item.blockInstance.updateNameDisplay();
                    }
                }),
                'blockBorder': () => state.selection.forEach(item => item.classList.contains('block') && (item.style.borderColor = color)),
                'handle': () => state.selection.forEach(item => item.classList.contains('block') && item.style.setProperty('--handle-color', color)),
                'text': () => applyStyleToSelection({ color: color }),
                'arrow': () => state.selection.forEach(item => { if (item.arrowInstance) { item.arrowInstance.color = color; item.arrowInstance.update(); } }), // Use instance properties
                'gridBg': () => document.body.style.background = color, // Note: this will remove the gradient
                'gridLines': () => grid.style.backgroundImage = `radial-gradient(${color} 1px, transparent 1px)`
            };

            if (actions[targetType]) {
                actions[targetType]();
                updateCustomizePanel();
            }
        }

        function showSmartColorPicker() {
            let targetType = 'gridBg';
            let initialColor = document.body.style.background;

            if (state.isEditing && state.activeEditingElement) {
                targetType = 'text';
                initialColor = getCommonStyleInSelection()?.color || '#f9fafb';
            } else if (state.lastSelectedItem?.classList.contains('block')) {
                targetType = 'blockBg';
                initialColor = getComputedStyle(state.lastSelectedItem).backgroundColor;
            } else if (state.lastSelectedItem?.classList.contains('arrow-group')) {
                targetType = 'arrow';
                initialColor = state.lastSelectedItem.querySelector('.arrow-line').getAttribute('stroke');
            }
            
            colorPicker.show(initialColor, state.lastMouseX, state.lastMouseY, (newColor) => {
                handleColorConfirm(targetType, newColor);
                recordState();
            });
        }

        function recordState() {
            saveCurrentPageState(); 
            if (state.historyIndex < state.history.length - 1) {
                state.history = state.history.slice(0, state.historyIndex + 1);
            }
            const currentState = {
                title: state.projectTitle,
                pages: JSON.parse(JSON.stringify(state.pages)),
                currentPageIndex: state.currentPageIndex,
                families: JSON.parse(JSON.stringify(state.families)),
                blockCounter: state.blockCounter
            };
            state.history.push(currentState);
            if (state.history.length > state.MAX_HISTORY_STATES) {
                state.history.shift();
            }
            state.historyIndex = state.history.length - 1;
        }

        function loadState(newState) {
            if (!newState) return;
            state.projectTitle = newState.title || "Untitled MapMent";
            projectTitleEl.textContent = state.projectTitle;
            state.pages = JSON.parse(JSON.stringify(newState.pages));
            state.families = newState.families ? JSON.parse(JSON.stringify(newState.families)) : [];
            state.currentPageIndex = newState.currentPageIndex;
            state.blockCounter = newState.blockCounter || state.blockCounter;
            loadPage(state.currentPageIndex, true);
            renderFamiliesList();
        }

        function undo() {
            if (state.historyIndex > 0) {
                state.historyIndex--;
                loadState(state.history[state.historyIndex]);
            }
        }

        function redo() {
            if (state.historyIndex < state.history.length - 1) {
                state.historyIndex++;
                loadState(state.history[state.historyIndex]);
            }
        }

        function saveCurrentPageState() {
            if (state.isEditing) finishEditing();
            if (state.pages.length === 0 || state.currentPageIndex < 0) return;
            const page = state.pages[state.currentPageIndex];
            if (!page) return;

            page.blocks = Array.from(document.querySelectorAll('.block')).map(b => b.blockInstance.serialize());
            page.arrows = Array.from(svgCanvas.querySelectorAll('.arrow-group')).map(ag => ag.arrowInstance.serialize());
            page.styles = {
                gridBg: document.body.style.background,
                gridLines: grid.style.backgroundImage,
            };
            page.viewport = { gridX: state.gridX, gridY: state.gridY, scale: state.scale };
        }

        function loadPage(index, isFirstLoad = false) {
            if (!isFirstLoad && state.currentPageIndex >= 0) {
                saveCurrentPageState();
            }
            if (index < 0 || index >= state.pages.length) return;

            state.currentPageIndex = index;
            const pageState = state.pages[state.currentPageIndex];
            applyPageState(pageState, isFirstLoad);
            pageTitleEl.textContent = pageState.title || `Pág. ${state.currentPageIndex + 1}`;
            pageTitleEl.contentEditable = false;
            updatePageUI();
        }

        function applyPageState(pageState, isFirstLoad = false) {
            document.querySelectorAll('.block').forEach(b => b.remove());
            svgCanvas.querySelectorAll('.arrow-group').forEach(ag => ag.remove());
            
            const glowFilter = svgDefs.querySelector('#selection-glow');
            svgDefs.innerHTML = '';
            if (glowFilter) svgDefs.appendChild(glowFilter);

            deselectAll();
            
            state.gridX = pageState.viewport?.gridX || 0;
            state.gridY = pageState.viewport?.gridY || 0;
            
            if (isFirstLoad) {
                state.scale = pageState.viewport?.scale || 1;
            }
            updateGridTransform();

            document.body.style.background = pageState.styles?.gridBg || 'linear-gradient(90deg, var(--background-start), var(--background-end), var(--background-start))';
            grid.style.backgroundImage = pageState.styles?.gridLines || `radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)`;
            
            let maxId = 0;
            if (pageState.blocks && Array.isArray(pageState.blocks)) {
                pageState.blocks.forEach(b => {
                    if (b && b.id) {
                        const idNum = parseInt(b.id.split('-')[1]);
                        if (!isNaN(idNum) && idNum > maxId) maxId = idNum;
                    }
                });
            }
             state.blockCounter = Math.max(state.blockCounter, maxId + 1);


            if (pageState.blocks && Array.isArray(pageState.blocks)) {
                pageState.blocks.forEach(blockConfig => {
                    // The Block constructor handles creation and appending to the grid
                    if(blockConfig) new Block(blockConfig);
                });
            }
            if (pageState.arrows && Array.isArray(pageState.arrows)) {
                pageState.arrows.forEach(arrowData => {
                    if(arrowData) new Arrow(arrowData);
                });
            }
        }
        
        function updatePageUI() {
            pageInfoDisplay.textContent = `Pág ${state.currentPageIndex + 1} / ${state.pages.length}`;
            prevPageBtn.disabled = state.currentPageIndex === 0;
            nextPageBtn.disabled = state.currentPageIndex >= state.pages.length - 1;
            deletePageBtn.disabled = state.pages.length <= 1 && state.selectedPageIndices.size === 0;
            updateBlocksList();
            updatePagesList();
        }

        function addNewPage() {
            saveCurrentPageState();
            const newPage = {
                title: `Página ${state.pages.length + 1}`,
                blocks: [],
                arrows: [],
                viewport: { gridX: 0, gridY: 0, scale: 1 },
                styles: {
                    gridBg: document.body.style.background,
                    gridLines: grid.style.backgroundImage,
                }
            };
            state.pages.push(newPage);
            loadPage(state.pages.length - 1);
            recordState();
            showToast(currentLangStrings.toast_page_added.replace('{page}', state.pages.length));
        }

        function deleteCurrentPage() {
            if (state.selectedPageIndices.size > 0) {
                deleteSelectedPages();
                return;
            }
            if (state.pages.length > 1) {
                if (confirm(`Tem certeza que deseja deletar "${state.pages[state.currentPageIndex].title}"?`)) {
                    state.pages.splice(state.currentPageIndex, 1);
                    state.currentPageIndex = Math.min(state.currentPageIndex, state.pages.length - 1);
                    loadPage(state.currentPageIndex, true);
                    recordState();
                    showToast(currentLangStrings.toast_page_deleted.replace('{count}', 1));
                }
            } else {
                showToast(currentLangStrings.toast_cant_delete_last);
            }
        }

        function deleteSelectedPages() {
            if (state.selectedPageIndices.size === 0) return;
            if (state.pages.length - state.selectedPageIndices.size < 1) {
                showToast(currentLangStrings.toast_cant_delete_last);
                return;
            }

            if (!confirm(`Tem certeza que deseja deletar ${state.selectedPageIndices.size} página(s) selecionada(s)?`)) {
                return;
            }

            // Sort indices in descending order to avoid shifting issues
            const sortedIndices = [...state.selectedPageIndices].sort((a, b) => b - a);
            
            let newCurrentPageIndex = state.currentPageIndex;

            sortedIndices.forEach(index => {
                state.pages.splice(index, 1);
                if (index < newCurrentPageIndex) {
                    newCurrentPageIndex--;
                }
            });
            
            state.selectedPageIndices.clear();
            loadPage(Math.max(0, newCurrentPageIndex), true);
            recordState();
            showToast(currentLangStrings.toast_page_deleted.replace('{count}', sortedIndices.length));
        }
        
        function goToNextPage() {
            if (state.currentPageIndex < state.pages.length - 1) loadPage(state.currentPageIndex + 1);
        }
        function goToPrevPage() {
            if (state.currentPageIndex > 0) loadPage(state.currentPageIndex - 1);
        }

        function importPdfFromFile(file) {
            const fileReader = new FileReader();
            fileReader.onload = function() {
                processPdfData(this.result, file.name);
            };
            fileReader.readAsArrayBuffer(file);
        }

        async function processPdfData(pdfData, sourceName) {
            showToast(currentLangStrings.toast_pdf_importing.replace('{name}', sourceName), 10000);
            try {
                let familyName = sourceName.replace(/\.pdf$/i, '') || "PDF Importado";
                let originalFamilyName = familyName;
                let counter = 1;
                while (state.families.some(f => f.name === familyName)) {
                    familyName = `${originalFamilyName} (${counter++})`;
                }

                const newFamily = {
                    id: `family-${Date.now()}`,
                    name: familyName
                };
                state.families.push(newFamily);

                const pdf = await pdfjsLib.getDocument({ data: pdfData }).promise;

                const wasEmpty = state.pages.length === 1 && state.pages[0].blocks.length === 0;
                if (wasEmpty) {
                    state.pages.shift();
                } else {
                    saveCurrentPageState();
                }

                const importStartIndex = state.pages.length;

                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const renderScale = 2.0;
                    const viewport = page.getViewport({ scale: renderScale });
                    
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;

                    const renderContext = { canvasContext: context, viewport: viewport };
                    await page.render(renderContext).promise;

                    const imageDataUrl = canvas.toDataURL('image/jpeg', 0.9);
                    
                    const maxWidth = 1200;
                    const blockWidth = viewport.width / renderScale > maxWidth ? maxWidth : viewport.width / renderScale;
                    const blockHeight = blockWidth * (viewport.height / viewport.width);

                    const gridCenter = screenToGridCoords((window.innerWidth - 300) / 2, window.innerHeight / 2);
                    const blockX = Math.max(0, gridCenter.x - blockWidth / 2);
                    const blockY = Math.max(0, gridCenter.y - blockHeight / 2);
                    
                    const imageHtml = `<img src="${imageDataUrl}" style="width:100%; height:100%;" alt="PDF Page ${i}">`;
                    
                    const newPage = {
                        blocks: [{
                            x: blockX,
                            y: blockY,
                            width: `${blockWidth}px`,
                            height: `${blockHeight}px`,
                            name: `Slide ${i} - ${familyName}`,
                            contentModel: [{ text: imageHtml, style: {}, isHTML: true }],
                            id: `block-slide-${importStartIndex + i - 1}-${state.blockCounter++}`,
                            familyId: newFamily.id,
                            showInList: true
                        }],
                        title: `Página ${importStartIndex + i} - ${familyName}`,
                        arrows: [],
                        viewport: { gridX: 0, gridY: 0, scale: 1 },
                        styles: {
                            gridBg: document.body.style.background,
                            gridLines: grid.style.backgroundImage,
                        }
                    };
                    state.pages.push(newPage);
                }

                loadPage(importStartIndex, true);
                renderFamiliesList();
                updateFamilySelectDropdown();
                recordState();
                showToast(currentLangStrings.toast_pdf_success.replace('{numPages}', pdf.numPages), 3000);
            } catch (error) {
                console.error('Error importing PDF:', error);
                showToast(currentLangStrings.toast_pdf_error, 3000);
            }
        }

        function saveAllPages() {
            saveCurrentPageState();
            const saveData = {
                title: state.projectTitle,
                formatVersion: "3.3",
                pages: state.pages,
                families: state.families,
                blockCounter: state.blockCounter
            };
            // Sanitize the title to create a valid filename
            const filename = (state.projectTitle.replace(/[\s/\\?%*:\"<>|]/g, '_') || 'MapMent-presentation') + '.json';
            download(filename, JSON.stringify(saveData, null, 2));
        }

        function loadAllPages(event) {
            const file = event.target.files[0];
            if (!file) return;
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const loadedData = JSON.parse(e.target.result);
                    if (loadedData.pages && Array.isArray(loadedData.pages)) {
                        state.projectTitle = loadedData.title || "Untitled MapMent";
                        state.pages = loadedData.pages;
                        state.families = loadedData.families || [];
                        state.blockCounter = loadedData.blockCounter || 1;
                    } else {
                        // Legacy format
                        state.pages = [loadedData];
                        state.projectTitle = "Untitled MapMent";
                        state.families = [];
                        state.blockCounter = 1;
                    }
                    // Backward compatibility
                    state.pages.forEach(page => {
                        page.blocks.forEach(block => {
                            page.title = page.title || `Página ${state.pages.indexOf(page) + 1}`;
                            block.name = block.name || `Bloco ${block.id.split('-')[1]}`;
                            block.showInList = block.showInList ?? true; // Default to true if not present
                        })
                    });
                    projectTitleEl.textContent = state.projectTitle;
                    document.title = `${state.projectTitle} - MapMent`;
                    loadPage(0, true);
                    renderFamiliesList();
                    state.history = [];
                    state.historyIndex = -1;
                    recordState();
                    showToast(currentLangStrings.toast_file_loaded);
                } catch (err) {
                    console.error('Error parsing JSON:', err);
                    showToast(currentLangStrings.toast_file_error);
                }
            };
            reader.readAsText(file);
            fileLoader.value = '';
        }

        function duplicateSelection() {
            const idMap = new Map();
            const newSelection = [];
            const offset = 30;
            const selectedBlocks = state.selection.filter(item => item.classList.contains('block'));
            const selectedArrows = state.selection.filter(item => item.classList.contains('arrow-group'));
            const newZIndex = findHighestZIndex() + 1;

            selectedBlocks.forEach(block => {
                const oldInstance = block.blockInstance;
                if (oldInstance) {
                    const oldConfig = oldInstance.serialize();
                    const config = {
                        ...oldConfig,
                        id: undefined, // Let constructor create a new one
                        x: oldConfig.x + offset,
                        y: oldConfig.y + offset,
                        name: `${oldConfig.name.replace(/ \(cópia\)$/, '')} (cópia)`,
                        zIndex: newZIndex,
                    };
                    const newBlockInstance = new Block(config);
                    idMap.set(block.id, newBlockInstance.id);
                    newSelection.push(newBlockInstance.element);
                }
            });

            selectedArrows.forEach(arrow => {
                const startId = arrow.dataset.startBlock;
                const endId = arrow.dataset.endBlock;
                if (idMap.has(startId) && idMap.has(endId)) {
                    const newArrowData = {
                        ...arrow.arrowInstance.serialize(),
                        startBlock: idMap.get(startId),
                        endBlock: idMap.get(endId)
                    };
                    const newArrowGroup = new Arrow(newArrowData).element;
                    newSelection.push(newArrowGroup);
                }
            });

            deselectAll();
            newSelection.forEach(item => updateSelection(item, true));
            recordState();
        }
        
        function getBlockCenter(block) {
            const x = parseInt(block.style.left);
            const y = parseInt(block.style.top);
            return { x: x + block.offsetWidth / 2, y: y + block.offsetHeight / 2 };
        }

        function getClosestConnectionPoint(from, to) {
            const fromRect = { x: parseInt(from.style.left), y: parseInt(from.style.top), width: from.offsetWidth, height: from.offsetHeight };
            const toRect = { x: parseInt(to.style.left), y: parseInt(to.style.top), width: to.offsetWidth, height: to.offsetHeight };
            const fromCx = fromRect.x + fromRect.width / 2;
            const fromCy = fromRect.y + fromRect.height / 2;
            const toCx = toRect.x + toRect.width / 2;
            const toCy = toRect.y + toRect.height / 2;
            const dx = toCx - fromCx;
            const dy = toCy - fromCy;
            if (dx === 0 && dy === 0) return {x: fromCx, y: fromCy};
            const angle = Math.atan2(dy, dx);
            const fromHalfWidth = fromRect.width / 2;
            const fromHalfHeight = fromRect.height / 2;
            const fromAngle = Math.atan2(fromHalfHeight, fromHalfWidth);
            let pointX, pointY;
            const absAngle = Math.abs(angle);
            if (absAngle > Math.PI - fromAngle || absAngle < fromAngle) {
                let tan = Math.tan(angle);
                pointX = dx > 0 ? fromCx + fromHalfWidth : fromCx - fromHalfWidth;
                pointY = fromCy + (pointX - fromCx) * tan;
            } else {
                let cot = 1 / Math.tan(angle);
                pointY = dy > 0 ? fromCy + fromHalfHeight : fromCy - fromHalfHeight;
                pointX = fromCx + (pointY - fromCy) * cot;
            }
            return { x: pointX, y: pointY };
        }

        function download(filename, text) {
            const element = document.createElement('a');
            element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);
            element.style.display = 'none';
            document.body.appendChild(element);
            element.click();
            document.body.removeChild(element);
        }

        function createColorPicker() {
            const picker = document.getElementById('custom-color-picker');
            const header = picker.querySelector('.color-picker-header');
            const spectrum = document.getElementById('color-spectrum');
            const cursor = document.getElementById('spectrum-cursor');
            const hueSlider = document.getElementById('hue-slider');
            const opacitySlider = document.getElementById('opacity-slider');
            const hexInput = document.getElementById('hex-input');
            const rInput = document.getElementById('rgba-input-r');
            const gInput = document.getElementById('rgba-input-g');
            const bInput = document.getElementById('rgba-input-b');
            const aInput = document.getElementById('rgba-input-a');
            const confirmBtn = document.getElementById('color-picker-confirm');
            const cancelBtn = document.getElementById('color-picker-cancel');

            let pickerState = { h: 0, s: 1, v: 1, a: 1 };
            let onConfirmCallback = null;

            function updateUI() {
                const { r, g, b } = hsvToRgb(pickerState.h, pickerState.s, pickerState.v);
                
                spectrum.style.background = `linear-gradient(to top, black, transparent), linear-gradient(to right, white, hsl(${pickerState.h}, 100%, 50%))`;
                opacitySlider.style.background = `linear-gradient(to right, transparent, rgb(${r},${g},${b}))`;
                
                cursor.style.left = `${pickerState.s * 100}%`;
                cursor.style.top = `${(1 - pickerState.v) * 100}%`;
                cursor.style.borderColor = pickerState.v > 0.5 ? 'black' : 'white';

                hexInput.value = rgbToHex(r, g, b);
                rInput.value = r;
                gInput.value = g;
                bInput.value = b;
                aInput.value = pickerState.a.toFixed(2);
            }

            function updateFromInputs() {
                const r = parseInt(rInput.value);
                const g = parseInt(gInput.value);
                const b = parseInt(bInput.value);
                const a = parseFloat(aInput.value);
                const { h, s, v } = rgbToHsv(r, g, b);
                pickerState = { h, s, v, a };
                hueSlider.value = h;
                opacitySlider.value = a;
                updateUI();
            }

            function handleSpectrumMove(e) {
                const rect = spectrum.getBoundingClientRect();
                pickerState.s = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
                pickerState.v = Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / rect.height));
                updateUI();
            }
            
            spectrum.addEventListener('mousedown', e => {
                handleSpectrumMove(e);
                const onMouseMove = (moveE) => handleSpectrumMove(moveE);
                const onMouseUp = () => document.removeEventListener('mousemove', onMouseMove);
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp, { once: true });
            });

            hueSlider.addEventListener('input', () => { pickerState.h = parseInt(hueSlider.value); updateUI(); });
            opacitySlider.addEventListener('input', () => { pickerState.a = parseFloat(opacitySlider.value); updateUI(); });
            
            [rInput,gInput,bInput,aInput].forEach(input => input.addEventListener('change', updateFromInputs));
            hexInput.addEventListener('change', () => {
                const { r, g, b } = hexToRgb(hexInput.value);
                const { h, s, v } = rgbToHsv(r, g, b);
                pickerState.h = h; pickerState.s = s; pickerState.v = v;
                updateUI();
            });

            confirmBtn.addEventListener('click', () => {
                const { r, g, b } = hsvToRgb(pickerState.h, pickerState.s, pickerState.v);
                if (onConfirmCallback) onConfirmCallback(`rgba(${r}, ${g}, ${b}, ${pickerState.a})`);
                picker.classList.add('hidden');
            });
            cancelBtn.addEventListener('click', () => picker.classList.add('hidden'));

            header.addEventListener('mousedown', e => {
                let offsetX = e.clientX - picker.offsetLeft;
                let offsetY = e.clientY - picker.offsetTop;
                const onMouseMove = (moveE) => {
                    picker.style.left = `${moveE.clientX - offsetX}px`;
                    picker.style.top = `${moveE.clientY - offsetY}px`;
                };
                const onMouseUp = () => document.removeEventListener('mousemove', onMouseMove);
                document.addEventListener('mousemove', onMouseMove);
                document.addEventListener('mouseup', onMouseUp, { once: true });
            });

            function hsvToRgb(h, s, v) {
                let r, g, b, i, f, p, q, t;
                i = Math.floor(h / 60); f = h / 60 - i; p = v * (1 - s); q = v * (1 - f * s); t = v * (1 - (1 - f) * s);
                switch (i % 6) { case 0: r = v; g = t; b = p; break; case 1: r = q; g = v; b = p; break; case 2: r = p; g = v; b = t; break; case 3: r = p; g = q; b = v; break; case 4: r = t; g = p; b = v; break; case 5: r = v; g = p; b = q; break; }
                return { r: Math.round(r * 255), g: Math.round(g * 255), b: Math.round(b * 255) };
            }
            function rgbToHsv(r, g, b) {
                r /= 255; g /= 255; b /= 255; let max = Math.max(r, g, b), min = Math.min(r, g, b), h, s, v = max, d = max - min; s = max === 0 ? 0 : d / max;
                if (max === min) h = 0; else { switch (max) { case r: h = (g - b) / d + (g < b ? 6 : 0); break; case g: h = (b - r) / d + 2; break; case b: h = (r - g) / d + 4; break; } h /= 6; }
                return { h: h * 360, s: s, v: v };
            }
            function rgbToHex(r, g, b) { return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase(); }
            function hexToRgb(hex) {
                let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
                return result ? { r: parseInt(result[1], 16), g: parseInt(result[2], 16), b: parseInt(result[3], 16) } : {r:0,g:0,b:0};
            }
            function parseRgba(rgba) {
                if (!rgba) return {r:0,g:0,b:0,a:1};
                const match = rgba.match(/rgba?(\d+,\s*\d+,\s*\d+(?:,\s*([\d.]+))?)/);
                return match ? {r: parseInt(match[1]), g: parseInt(match[2]), b: parseInt(match[3]), a: match[4] !== undefined ? parseFloat(match[4]) : 1} : {r:255, g:255, b:255, a:1};
            }

            return {
                show(initialColor, x, y, onConfirm) {
                    onConfirmCallback = onConfirm;
                    const {r, g, b, a} = parseRgba(initialColor);
                    const {h, s, v} = rgbToHsv(r, g, b);
                    pickerState = {h, s, v, a};
                    hueSlider.value = h;
                    opacitySlider.value = a;
                    updateUI();
                    
                    const pickerWidth = picker.offsetWidth;
                    const pickerHeight = picker.offsetHeight;
                    let finalX = x - pickerWidth - 10;
                    let finalY = y;

                    if (finalX < 0) { finalX = x + 10; }
                    if (finalY + pickerHeight > window.innerHeight) {
                        finalY = window.innerHeight - pickerHeight - 10;
                    }

                    picker.style.left = `${Math.max(0, finalX)}px`;
                    picker.style.top = `${Math.max(0, finalY)}px`;
                    
                    picker.classList.remove('hidden');
                },
                hide() { picker.classList.add('hidden'); },
                isHidden() { return picker.classList.contains('hidden'); }
            };
        }

        // --- Mecanismo de Edição de Texto ---

        function parseContent(element, initialHTML = null) {
            const model = [];
            const source = initialHTML ? document.createElement('div') : element;
            if (initialHTML) source.innerHTML = initialHTML;

            source.childNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) {
                    if (node.textContent) model.push({ text: node.textContent, style: {} });
                } else if (node.nodeType === Node.ELEMENT_NODE) {
                    const style = {};
                    const computedStyle = window.getComputedStyle(node);
                    if (computedStyle.fontWeight === '700' || computedStyle.fontWeight === 'bold') style.fontWeight = 'bold';
                    if (computedStyle.fontStyle === 'italic') style.fontStyle = 'italic';
                    if (computedStyle.textDecorationLine === 'underline') style.textDecoration = 'underline';
                    if (computedStyle.fontSize) style.fontSize = computedStyle.fontSize;
                    if (computedStyle.fontFamily) style.fontFamily = computedStyle.fontFamily;
                    if (computedStyle.color) style.color = computedStyle.color;

                    model.push({ text: node.textContent, style });
                }
            });
            return mergeModel(model);
        }

        function getSelectionIndices(parentElement) {
            const selection = window.getSelection();
            if (selection.rangeCount === 0) return { start: 0, end: 0 };
            const range = selection.getRangeAt(0);
            
            let start = 0, end = 0;
            const preSelectionRange = document.createRange();
            preSelectionRange.selectNodeContents(parentElement);
            preSelectionRange.setEnd(range.startContainer, range.startOffset);
            start = preSelectionRange.toString().length;
            end = start + range.toString().length;
            
            return { start, end };
        }

        function restoreSelection(indices) {
            const selection = window.getSelection();
            selection.removeAllRanges();
            const range = document.createRange();
            
            let charIndex = 0;
            let startNode = null, startOffset = 0;
            let endNode = null, endOffset = 0;
            
            function findNodeAndOffset(targetIndex) {
                if (!state.activeEditingElement) return { node: null, offset: 0 };
                for (const node of state.activeEditingElement.childNodes) {
                    const nodeLength = node.textContent.length;
                    if (charIndex + nodeLength >= targetIndex) {
                        return { node: node.firstChild || node, offset: targetIndex - charIndex };
                    }
                    charIndex += nodeLength;
                }
                const lastChild = state.activeEditingElement.lastChild;
                if (!lastChild) return { node: state.activeEditingElement, offset: 0 };
                return { node: lastChild.firstChild || lastChild, offset: lastChild.textContent.length };
            }
            
            const start = findNodeAndOffset(indices.start);
            startNode = start.node;
            startOffset = start.offset;

            charIndex = 0; 
            const end = findNodeAndOffset(indices.end);
            endNode = end.node;
            endOffset = end.offset;
            
            try {
                if (startNode && endNode) {
                    range.setStart(startNode, startOffset);
                    range.setEnd(endNode, endOffset);
                    selection.addRange(range);
                }
            } catch (e) {
                console.error("Falha ao restaurar a seleção.", e);
            }
        }

        function applyStyleToSelection(styleToApply) {
            if (!state.isEditing) return;

            const selectionIndices = getSelectionIndices(state.activeEditingElement);
            const { start, end } = selectionIndices;
            
            let newModel = [];
            let currentIndex = 0;

            state.activeContentModel.forEach(span => {
                const spanStart = currentIndex;
                const spanEnd = spanStart + span.text.length;
                
                if (spanEnd <= start || spanStart >= end) {
                    newModel.push(span);
                } else {
                    const beforeText = span.text.substring(0, start - spanStart);
                    const selectedText = span.text.substring(Math.max(0, start - spanStart), end - spanStart);
                    const afterText = span.text.substring(end - spanStart);
                    
                    if (beforeText) newModel.push({ text: beforeText, style: { ...span.style } });

                    if (selectedText) {
                        const newStyle = { ...span.style };
                        for (const key in styleToApply) {
                            if (['fontWeight', 'fontStyle', 'textDecoration'].includes(key)) {
                                if (newStyle[key] === styleToApply[key]) {
                                    delete newStyle[key]; 
                                } else {
                                    newStyle[key] = styleToApply[key];
                                }
                            } else {
                                newStyle[key] = styleToApply[key]; 
                            }
                             if (key === 'fontSize' && styleToApply[key] === '15px') {
                                delete newStyle[key];
                            }
                        }
                        newModel.push({ text: selectedText, style: newStyle });
                    }
                    
                    if (afterText) newModel.push({ text: afterText, style: { ...span.style } });
                }
                currentIndex = spanEnd;
            });
            
            state.activeContentModel = mergeModel(newModel);
            
            const blockInstance = state.activeEditingElement.closest('.block').blockInstance;
            blockInstance.contentModel = state.activeContentModel;
            blockInstance.renderContent();

            restoreSelection(selectionIndices);
        }
        
        function mergeModel(model) {
            if (model.length < 2) return model;
            const merged = [model[0]];
            for (let i = 1; i < model.length; i++) {
                const prev = merged[merged.length - 1];
                const current = model[i];
                if (JSON.stringify(prev.style) === JSON.stringify(current.style) && !prev.isHTML && !current.isHTML) {
                    prev.text += current.text;
                } else {
                    merged.push(current);
                }
            }
            return merged.filter(span => span.text.length > 0);
        }
        
        function getCommonStyleInSelection() {
            if (!state.isEditing) return null;
            const { start, end } = getSelectionIndices(state.activeEditingElement);
            if (start === end) return getStyleAtCharacterIndex(start > 0 ? start - 1 : 0);

            let commonStyle = null;
            let currentIndex = 0;
            for (const span of state.activeContentModel) {
                const spanStart = currentIndex;
                const spanEnd = spanStart + span.text.length;
                if (spanEnd > start && spanStart < end) { 
                    if (commonStyle === null) {
                        commonStyle = { ...span.style };
                    } else {
                        for (const key in commonStyle) {
                            if (commonStyle[key] !== span.style[key]) {
                                delete commonStyle[key];
                            }
                        }
                    }
                }
                currentIndex = spanEnd;
            }
            return commonStyle || {};
        }

        function getStyleAtCharacterIndex(index) {
            let currentIndex = 0;
            for (const span of state.activeContentModel) {
                if (index < currentIndex + span.text.length) {
                    return span.style;
                }
                currentIndex += span.text.length;
            }
            return state.activeContentModel[state.activeContentModel.length - 1]?.style || {};
        }

        // --- Block Naming and Sidebar List ---

        function updateBlocksList() {
             blocksList.innerHTML = '';
             const currentPage = state.pages[state.currentPageIndex];
             if (!currentPage || !currentPage.blocks) return;
 
             const visibleBlocks = currentPage.blocks.filter(b => b.showInList);
             const visibleBlockIds = visibleBlocks.map(b => b.id);
 
             visibleBlocks.forEach(blockData => {
                 const li = document.createElement('li');
                 li.textContent = blockData.name;
                 li.dataset.blockId = blockData.id;
                 li.setAttribute('draggable', 'true');
 
                 if (state.selection.some(sel => sel.id === blockData.id)) {
                     li.classList.add('selected');
                 }
 
                 li.addEventListener('click', (e) => {
                     e.stopPropagation();
                     const clickedBlockId = li.dataset.blockId;
                     const clickedBlockEl = document.getElementById(clickedBlockId);
                     if (!clickedBlockEl) return;
 
                     if (e.ctrlKey) { // Range selection
                         const clickedIndex = visibleBlockIds.indexOf(clickedBlockId);
                         const lastSelectedBlock = state.lastSelectedItem;
                         let anchorIndex = -1;
                         if (lastSelectedBlock) {
                             anchorIndex = visibleBlockIds.indexOf(lastSelectedBlock.id);
                         }
                         if (anchorIndex === -1) {
                             anchorIndex = clickedIndex;
                         }
 
                         const start = Math.min(anchorIndex, clickedIndex);
                         const end = Math.max(anchorIndex, clickedIndex);
 
                         deselectAll();
                         for (let i = start; i <= end; i++) {
                             const blockIdInRange = visibleBlockIds[i];
                             const blockElInRange = document.getElementById(blockIdInRange);
                             if (blockElInRange) {
                                 updateSelection(blockElInRange, true, true);
                             }
                         }
                     } else if (e.shiftKey) { // Individual toggle
                         updateSelection(clickedBlockEl, true, true);
                     } else { // Single selection
                         updateSelection(clickedBlockEl, false, true);
                         const margin = 50;
                         state.gridX = Math.min(0, margin - (clickedBlockEl.offsetLeft * state.scale));
                         state.gridY = Math.min(0, margin - (clickedBlockEl.offsetTop * state.scale));
                         updateGridTransform();
                     }
                 });
 
                 li.addEventListener('dragstart', (e) => { state.draggedListItem = e.target; setTimeout(() => e.target.classList.add('dragging'), 0); });
                 li.addEventListener('dragend', (e) => { state.draggedListItem.classList.remove('dragging'); state.draggedListItem = null; });
 
                 blocksList.appendChild(li);
             });
        }
        
        blocksList.addEventListener('dragover', e => {
            e.preventDefault();
            const afterElement = getDragAfterElement(blocksList, e.clientY);
            if (state.draggedListItem) {
                 if (afterElement == null) {
                    blocksList.appendChild(state.draggedListItem);
                } else {
                    blocksList.insertBefore(state.draggedListItem, afterElement);
                }
            }
        });

        blocksList.addEventListener('drop', e => {
            e.preventDefault();
            if(!state.draggedListItem) return;

            const newOrderIds = [...blocksList.querySelectorAll('li')].map(li => li.dataset.blockId);
            const currentPageData = state.pages[state.currentPageIndex];
            
            // Reorder only the visible blocks, keep hidden blocks at the end
            const visibleBlocks = currentPageData.blocks.filter(b => b.showInList);
            const hiddenBlocks = currentPageData.blocks.filter(b => !b.showInList);

            visibleBlocks.sort((a, b) => newOrderIds.indexOf(a.id) - newOrderIds.indexOf(b.id));

            currentPageData.blocks = [...visibleBlocks, ...hiddenBlocks];
            
            const totalBlocks = currentPageData.blocks.length;
            currentPageData.blocks.forEach((blockData, index) => {
                blockData.zIndex = totalBlocks - index;
                const blockEl = document.getElementById(blockData.id);
                if (blockEl) {
                    blockEl.style.zIndex = blockData.zIndex;
                }
            });
            
            recordState();
        });

        function getDragAfterElement(container, y) {
            const draggableElements = [...container.querySelectorAll('li:not(.dragging)')];
            return draggableElements.reduce((closest, child) => {
                const box = child.getBoundingClientRect();
                const offset = y - box.top - box.height / 2;
                if (offset < 0 && offset > closest.offset) {
                    return { offset: offset, element: child };
                } else {
                    return closest;
                }
            }, { offset: Number.NEGATIVE_INFINITY }).element;
        }


        function findHighestZIndex() {
            const blocks = document.querySelectorAll('.block');
            let maxZ = 10; // Base z-index for blocks, must be > arrow-svg z-index
            blocks.forEach(block => {
                const z = parseInt(block.style.zIndex);
                if (!isNaN(z) && z > maxZ) {
                    maxZ = z;
                }
            });
            return maxZ;
        }

        function startRenamingBlock() {
            if (state.selection.length !== 1 || !state.lastSelectedItem?.classList.contains('block')) return;
            const blockName = state.lastSelectedItem.dataset.name;
            const isDefaultName = (blockName.startsWith('Bloco ') && !isNaN(parseInt(blockName.split(' ')[1]))) || blockName.endsWith(' (cópia)');

            renameBlockForm.classList.remove('hidden');
            renameBlockInput.value = isDefaultName ? '' : blockName;
            renameBlockInput.placeholder = blockName;
            renameBlockInput.focus();
            renameBlockInput.select();
        }

        function confirmRenameBlock() {
            if (state.selection.length !== 1 || !state.lastSelectedItem?.classList.contains('block')) return;
            const blockToRename = state.lastSelectedItem;
            const oldName = blockToRename.dataset.name;
            const wasDefaultOrCopy = (oldName.startsWith('Bloco ') && !isNaN(parseInt(oldName.split(' ')[1]))) || oldName.endsWith(' (cópia)');

            const newName = renameBlockInput.value.trim() || renameBlockInput.placeholder;
            if (newName) {
                blockToRename.blockInstance.name = newName;
                blockToRename.dataset.name = newName;
                blockToRename.blockInstance.updateNameDisplay();
                if (wasDefaultOrCopy && blockToRename.dataset.showInList !== 'true') {
                    blockToRename.dataset.showInList = 'true';
                    blockToRename.blockInstance.showInList = true;
                    showInListCheckbox.checked = true;
                }

                recordState();
                updateBlocksList();
                showToast(currentLangStrings.toast_block_renamed.replace('{name}', newName));
            }
            renameBlockForm.classList.add('hidden');
        }

        function toggleShowInList(e) {
            const show = e.target.checked;
            const blockIds = new Set(state.selection.filter(i => i.classList.contains('block')).map(b => b.id));
            
            state.pages[state.currentPageIndex].blocks.forEach(blockData => {
                if (blockIds.has(blockData.id)) {
                    blockData.showInList = show;
                    const blockEl = document.getElementById(blockData.id);
                    if (blockEl) blockEl.dataset.showInList = show;
                }
            });

            showToast(show ? currentLangStrings.toast_block_shown_in_list : currentLangStrings.toast_block_hidden_in_list);
            updateBlocksList();
            recordState();
        }

        function updatePagesList() {
            pagesList.innerHTML = '';
            state.selectedPageIndices.forEach(i => { if (i >= state.pages.length) state.selectedPageIndices.delete(i); });

            state.pages.forEach((page, index) => {
                const li = document.createElement('li');
                const pageTitle = page.title || `Página ${index + 1}`;
                li.textContent = `${index + 1}: ${pageTitle}`;
                li.dataset.pageIndex = index;
                li.setAttribute('draggable', 'true');

                li.addEventListener('dragstart', (e) => {
                    state.draggedListItem = e.target;
                    setTimeout(() => e.target.classList.add('dragging'), 0);
                });

                li.addEventListener('dragend', (e) => {
                    if (state.draggedListItem) state.draggedListItem.classList.remove('dragging');
                    state.draggedListItem = null;
                });

                if (index === state.currentPageIndex) li.classList.add('current');
                if (state.selectedPageIndices.has(index)) li.classList.add('selected');

                li.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const clickedIndex = parseInt(li.dataset.pageIndex);

                    if (e.ctrlKey) { // Range selection
                        const anchorIndex = state.selectedPageIndices.size > 0 ? [...state.selectedPageIndices].pop() : state.currentPageIndex;
                        const start = Math.min(anchorIndex, clickedIndex);
                        const end = Math.max(anchorIndex, clickedIndex);
                        state.selectedPageIndices.clear();
                        for (let i = start; i <= end; i++) {
                            state.selectedPageIndices.add(i);
                        }
                    } else if (e.shiftKey) { // Individual toggle
                        if (state.selectedPageIndices.has(clickedIndex)) state.selectedPageIndices.delete(clickedIndex);
                        else state.selectedPageIndices.add(clickedIndex);
                    } else { // Single selection
                        state.selectedPageIndices.clear();
                        loadPage(clickedIndex);
                    }
                    updatePagesList();
                });
                pagesList.appendChild(li);
            });
        }

        // --- Move Blocks Functionality ---

        function moveSelectionToPage(targetPageNumber) {
            const targetIndex = targetPageNumber - 1;
            if (targetIndex < 0 || targetIndex >= state.pages.length || targetIndex === state.currentPageIndex) {
                 if (targetIndex !== state.currentPageIndex) showToast(currentLangStrings.toast_invalid_page);
                return;
            }

            saveCurrentPageState();
            
            const blocksToMove = state.selection.filter(item => item.classList.contains('block'));
            const blockIdsToMove = new Set(blocksToMove.map(b => b.id));
            if (blockIdsToMove.size === 0) return;

            const blockDataToMove = state.pages[state.currentPageIndex].blocks.filter(b => blockIdsToMove.has(b.id));

            state.pages[state.currentPageIndex].blocks = state.pages[state.currentPageIndex].blocks.filter(b => !blockIdsToMove.has(b.id));
            state.pages[state.currentPageIndex].arrows = state.pages[state.currentPageIndex].arrows.filter(a => !blockIdsToMove.has(a.startBlock) && !blockIdsToMove.has(a.endBlock));

            if (!state.pages[targetIndex].blocks) state.pages[targetIndex].blocks = [];
            state.pages[targetIndex].blocks.push(...blockDataToMove);
            
            showToast(currentLangStrings.toast_blocks_moved.replace('{count}', blockIdsToMove.size).replace('{page}', targetPageNumber));
            
            loadPage(state.currentPageIndex);
            recordState();
        }

        
        // --- Family System ---
        
        function toggleParentMove() {
            state.isParentMoveEnabled = !state.isParentMoveEnabled;
            toggleParentMoveBtn.classList.toggle('active', state.isParentMoveEnabled);
            showToast(state.isParentMoveEnabled ? currentLangStrings.toast_parent_move_on : currentLangStrings.toast_parent_move_off);
        }

        function addNewFamily() {
            const name = newFamilyNameInput.value.trim();
            if (name && !state.families.some(f => f.name === name)) {
                const newFamily = {
                    id: `family-${Date.now()}`,
                    name: name
                };
                state.families.push(newFamily);
                newFamilyNameInput.value = '';
                renderFamiliesList();
                updateFamilySelectDropdown();
                recordState();
            }
        }

        function renderFamiliesList() {
            familiesList.innerHTML = '';
            state.families.forEach(family => {
                const li = document.createElement('li');
                li.dataset.familyId = family.id;
                
                const nameSpan = document.createElement('span');
                nameSpan.textContent = family.name;
                nameSpan.onclick = () => {
                    const newName = prompt(`Editar nome da família "${family.name}":`, family.name);
                    if (newName && newName.trim()) {
                        family.name = newName.trim();
                        renderFamiliesList();
                        updateFamilySelectDropdown();
                        recordState();
                    }
                };

                const actionsDiv = document.createElement('div');
                actionsDiv.className = 'family-actions';

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = '🗑️';
                deleteBtn.title = 'Deletar Família';
                deleteBtn.onclick = () => {
                    if (confirm(`Tem certeza que deseja deletar a família "${family.name}"? Os blocos não serão deletados.`)) {
                        // Unset family from blocks
                        state.pages.forEach(page => {
                            page.blocks.forEach(block => {
                                if (block.familyId === family.id) {
                                    delete block.familyId;
                                    const blockEl = document.getElementById(block.id);
                                    if(blockEl) delete blockEl.dataset.familyId;
                                }
                            });
                        });
                        state.families = state.families.filter(f => f.id !== family.id);
                        renderFamiliesList();
                        updateFamilySelectDropdown();
                        recordState();
                    }
                };
                
                actionsDiv.appendChild(deleteBtn);
                li.appendChild(nameSpan);
                li.appendChild(actionsDiv);
                familiesList.appendChild(li);
            });
        }
        
        function updateFamilySelectDropdown() {
            const currentVal = familySelect.value;
            familySelect.innerHTML = '<option value="none">Nenhuma</option>';
            state.families.forEach(family => {
                const option = document.createElement('option');
                option.value = family.id;
                option.textContent = family.name;
                familySelect.appendChild(option);
            });
            familySelect.value = currentVal;
        }
        
        function assignFamilyToSelection() {
            const familyId = familySelect.value;
            const selectedBlocks = state.selection.filter(item => item.classList.contains('block'));

            selectedBlocks.forEach(block => {
                if (familyId === 'none') {
                    delete block.dataset.familyId;
                } else {
                    block.dataset.familyId = familyId;
                }
            });
            recordState();
        }


        initialize();
    });