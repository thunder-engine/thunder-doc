.. _api_RenderTarget:

RenderTarget
============

Inherited: None

.. _api_RenderTarget_description:

Description
-----------



.. _api_RenderTarget_public:

Public Methods
--------------

+--------------------------------+------------------------------------------------------------------------------------------------------------------+
|                            int | :ref:`clearFlags<api_RenderTarget_81e5a639>` () const                                                            |
+--------------------------------+------------------------------------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`colorAttachment<api_RenderTarget_86fba73d>` (uint32_t  index) const                                        |
+--------------------------------+------------------------------------------------------------------------------------------------------------------+
|                       uint32_t | :ref:`colorAttachmentCount<api_RenderTarget_28b0fe64>` () const                                                  |
+--------------------------------+------------------------------------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`depthAttachment<api_RenderTarget_82ace4f0>` () const                                                       |
+--------------------------------+------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`renderArea<api_RenderTarget_1f7ea56b>` (int32_t & x, int32_t & y, int32_t & width, int32_t & height) const |
+--------------------------------+------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setClearFlags<api_RenderTarget_badec841>` (int  flags)                                                     |
+--------------------------------+------------------------------------------------------------------------------------------------------------------+
|                       uint32_t | :ref:`setColorAttachment<api_RenderTarget_f3d2c974>` (uint32_t  index, Texture * texture)                        |
+--------------------------------+------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setDepthAttachment<api_RenderTarget_a7e5230d>` (Texture * texture)                                         |
+--------------------------------+------------------------------------------------------------------------------------------------------------------+
|                           void | :ref:`setRenderArea<api_RenderTarget_71d8092c>` (int32_t  x, int32_t  y, int32_t  width, int32_t  height)        |
+--------------------------------+------------------------------------------------------------------------------------------------------------------+



.. _api_RenderTarget_static:

Static Methods
--------------

None

.. _api_RenderTarget_methods:

Methods Description
-------------------

.. _api_RenderTarget_81e5a639:

 int **RenderTarget::clearFlags** () const

Returns clear buffers startegy used on render target bind.

**See also** setClearFlags().

----

.. _api_RenderTarget_86fba73d:

 :ref:`Texture<api_Texture>` * **RenderTarget::colorAttachment** (uint32_t  *index*) const

Returns the attached color textures with index.

**See also** setColorAttachment().

----

.. _api_RenderTarget_28b0fe64:

 uint32_t **RenderTarget::colorAttachmentCount** () const

Returns the number of attached color textures.

----

.. _api_RenderTarget_82ace4f0:

 :ref:`Texture<api_Texture>` * **RenderTarget::depthAttachment** () const

Returns an attached depth texture if exist.

**See also** setDepthAttachment().

----

.. _api_RenderTarget_1f7ea56b:

 void **RenderTarget::renderArea** (int32_t & *x*, int32_t & *y*, int32_t & *width*, int32_t & *height*) const

/*! Retrieves the renderable area rectangle within this render target.

This method returns the viewport or scissor rectangle that defines the actual rendering area available for drawing operations. The area is typically used for setting up the viewport, scissor test, or clearing operations.

This method accepts several output parameters *x* *y* *width* and height.

**See also** setRenderArea().

----

.. _api_RenderTarget_badec841:

 void **RenderTarget::setClearFlags** (int  *flags*)

Sets clear buffers startegy on bind using clear flags.

**See also** clearFlags().

----

.. _api_RenderTarget_f3d2c974:

 uint32_t **RenderTarget::setColorAttachment** (uint32_t  *index*, :ref:`Texture<api_Texture>` * *texture*)

Attach a color *texture* at *index* to render target.

**See also** colorAttachment().

----

.. _api_RenderTarget_a7e5230d:

 void **RenderTarget::setDepthAttachment** (:ref:`Texture<api_Texture>` * *texture*)

Attach a depth *texture* to render target.

**See also** depthAttachment().

----

.. _api_RenderTarget_71d8092c:

 void **RenderTarget::setRenderArea** (int32_t  *x*, int32_t  *y*, int32_t  *width*, int32_t  *height*)

Sets rendering area at *x* *y* position and *width* *height* dimensions.

**See also** renderArea().


