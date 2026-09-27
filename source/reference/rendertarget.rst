.. _api_RenderTarget:

RenderTarget
============

Inherited: :ref:`Resource<api_Resource>`

.. _api_RenderTarget_description:

Description
-----------



.. _api_RenderTarget_public:

Public Methods
--------------

+-------------------------------------+------------------------------------------------------------------------------------------------------------------+
| const :ref:`Vector4<api_Vector4>` & | :ref:`clearColor<api_RenderTarget_dfbc1396>` () const                                                            |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------+
|       :ref:`Texture<api_Texture>` * | :ref:`colorAttachment<api_RenderTarget_c8361e57>` (uint32_t  index) const                                        |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                            uint32_t | :ref:`colorAttachmentCount<api_RenderTarget_b60d287c>` () const                                                  |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------+
|       :ref:`Texture<api_Texture>` * | :ref:`depthAttachment<api_RenderTarget_6e1a930b>` () const                                                       |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                void | :ref:`renderArea<api_RenderTarget_147f20be>` (int32_t & x, int32_t & y, int32_t & width, int32_t & height) const |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setClearColor<api_RenderTarget_e6a18d3f>` (const Vector4 & color)                                          |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                            uint32_t | :ref:`setColorAttachment<api_RenderTarget_c195e047>` (uint32_t  index, Texture * texture)                        |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setDepthAttachment<api_RenderTarget_89bd36e4>` (Texture * texture)                                         |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                                void | :ref:`setRenderArea<api_RenderTarget_b8cd1670>` (int32_t  x, int32_t  y, int32_t  width, int32_t  height)        |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------+
|                             int32_t | :ref:`tileIndex<api_RenderTarget_ce14659f>` () const                                                             |
+-------------------------------------+------------------------------------------------------------------------------------------------------------------+



.. _api_RenderTarget_static:

Static Methods
--------------

None

.. _api_RenderTarget_methods:

Methods Description
-------------------

.. _api_RenderTarget_dfbc1396:

const :ref:`Vector4<api_Vector4>` & **RenderTarget::clearColor** () const

Returns color that will be used to clear attached targets.

**See also** setClearColor().

----

.. _api_RenderTarget_c8361e57:

 :ref:`Texture<api_Texture>` * **RenderTarget::colorAttachment** (uint32_t  *index*) const

Returns the attached color textures with index.

**See also** setColorAttachment().

----

.. _api_RenderTarget_b60d287c:

 uint32_t **RenderTarget::colorAttachmentCount** () const

Returns the number of attached color textures.

----

.. _api_RenderTarget_6e1a930b:

 :ref:`Texture<api_Texture>` * **RenderTarget::depthAttachment** () const

Returns an attached depth texture if exist.

**See also** setDepthAttachment().

----

.. _api_RenderTarget_147f20be:

 void **RenderTarget::renderArea** (int32_t & *x*, int32_t & *y*, int32_t & *width*, int32_t & *height*) const

Retrieves the renderable area rectangle within this render target.

This method returns the viewport or scissor rectangle that defines the actual rendering area available for drawing operations. The area is typically used for setting up the viewport, scissor test, or clearing operations.

This method accepts several output parameters *x* *y* *width* and height.

**See also** setRenderArea().

----

.. _api_RenderTarget_e6a18d3f:

 void **RenderTarget::setClearColor** (:ref:`Vector4<api_Vector4>` & *color*)

Sets the *color* that will be used to clear attached targets.

**See also** clearColor().

----

.. _api_RenderTarget_c195e047:

 uint32_t **RenderTarget::setColorAttachment** (uint32_t  *index*, :ref:`Texture<api_Texture>` * *texture*)

Attach a color *texture* at *index* to render target.

**See also** colorAttachment().

----

.. _api_RenderTarget_89bd36e4:

 void **RenderTarget::setDepthAttachment** (:ref:`Texture<api_Texture>` * *texture*)

Attach a depth *texture* to render target.

**See also** depthAttachment().

----

.. _api_RenderTarget_b8cd1670:

 void **RenderTarget::setRenderArea** (int32_t  *x*, int32_t  *y*, int32_t  *width*, int32_t  *height*)

Sets rendering area at *x* *y* position and *width* *height* dimensions.

**See also** renderArea().

----

.. _api_RenderTarget_ce14659f:

 int32_t **RenderTarget::tileIndex** () const

Returns current tile index.


