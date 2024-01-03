.. _api_RenderTarget:

RenderTarget Class
==================

Inherited: :doc:`Resource<api_Resource>`

.. _api_RenderTarget_description:

Description
-----------



.. _api_RenderTarget_public:

Public Methods
--------------

+--------------------------------+--------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`colorAttachment<api_RenderTarget_colorAttachment>` (int  index) const          |
+--------------------------------+--------------------------------------------------------------------------------------+
|                            int | :ref:`colorAttachmentCount<api_RenderTarget_colorAttachmentCount>` () const          |
+--------------------------------+--------------------------------------------------------------------------------------+
|  :ref:`Texture<api_Texture>` * | :ref:`depthAttachment<api_RenderTarget_depthAttachment>` () const                    |
+--------------------------------+--------------------------------------------------------------------------------------+
|                            int | :ref:`setColorAttachment<api_RenderTarget_setColorAttachment>` (in  int, Texture * ) |
+--------------------------------+--------------------------------------------------------------------------------------+
|                           void | :ref:`setDepthAttachment<api_RenderTarget_setDepthAttachment>` (Texture * texture)   |
+--------------------------------+--------------------------------------------------------------------------------------+



.. _api_RenderTarget_static:

Static Methods
--------------

None

.. _api_RenderTarget_methods:

Methods Description
-------------------

.. _api_RenderTarget_colorAttachment:

 :ref:`Texture<api_Texture>`* **RenderTarget::colorAttachment** (int  *index*) const

Returns the attached color textures with *index*.

**See also** setColorAttachment().

----

.. _api_RenderTarget_colorAttachmentCount:

 int **RenderTarget::colorAttachmentCount** () const

Returns the number of attached color textures.

----

.. _api_RenderTarget_depthAttachment:

 :ref:`Texture<api_Texture>`* **RenderTarget::depthAttachment** () const

Returns an attached depth texture if exist.

**See also** setDepthAttachment().

----

.. _api_RenderTarget_setColorAttachment:

 int **RenderTarget::setColorAttachment** (:ref:`in<api_in>`  *int*, :ref:`Texture<api_Texture>` * **)

Attach a color texture at index to render target.

**See also** colorAttachment().

----

.. _api_RenderTarget_setDepthAttachment:

 void **RenderTarget::setDepthAttachment** (:ref:`Texture<api_Texture>` * *texture*)

Attach a depth *texture* to render target.

**See also** depthAttachment().


